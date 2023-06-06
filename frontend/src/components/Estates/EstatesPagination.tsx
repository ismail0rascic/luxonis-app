import React, { Dispatch } from "react";

import MyPagination from "../Pagination/MyPagination";

import usePagination from "../../hooks/usePagination";

import { getEstates } from "../../actions/estatesActions";

interface EstatesPaginationProps {
  dispatch: Dispatch<any>;
  length: number;
}

const EstatesPagination = ({ length, dispatch }: EstatesPaginationProps) => {
  
  const { count, page, handleChange } = usePagination(
    length,
    dispatch,
    getEstates
  );

  return <MyPagination count={count} page={page} handleChange={handleChange} />;
};

export default EstatesPagination;
