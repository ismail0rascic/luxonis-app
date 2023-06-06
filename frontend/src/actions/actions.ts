import axios from "axios";
import { baseUrl } from "../config/config";
import { q } from "../types/types";

export const get = (
  url: string,
  q: q,
  successCallback: (data: any) => void,
  errorCallback: (error: any) => void
) => {  
  axios
    .get(`${baseUrl}${url}`, {
      params: {
        q: q,
      },
    })
    .then((res) => {
      successCallback(res.data);
    })
    .catch((err) => {
      errorCallback(err.response.data);
    });
};
