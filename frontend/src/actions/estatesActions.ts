import { Estate, q } from "../types/types";
import { get } from "./actions";
import { Dispatch, SetStateAction } from "react";
import { TYPES } from "./types";

export const getEstates = (
  dispatch: Dispatch<any>,
  q: q,
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  const successCallback = (data: Estate[]) => {
    setLoading && setLoading(false);
    dispatch({ type: TYPES.LIST_ESTATES, payload: data });
  };
  const errorCallback = (err: any) => {
    dispatch({ type: TYPES.ERROR, payload: err });
  };

  get("/api/estates", q, successCallback, errorCallback);
};
