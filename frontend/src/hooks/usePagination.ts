import { useState } from "react";
import { Dispatch } from "react";
import { q } from "../types/types";

const usePagination = (
  length: number,
  dispatch: Dispatch<any>,
  action: (dispatch: Dispatch<any>, params: q) => void

  ) => {
  const [page, setPage] = useState<number>(1);
  const limit: number = 20;
  const count: number = Math.ceil(length / limit);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    action(dispatch,{ limit, page: p });
  };

  return { count, page, handleChange };
};

export default usePagination