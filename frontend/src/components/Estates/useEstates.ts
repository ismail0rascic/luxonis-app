import { useEffect, useReducer, useState } from "react";
import { getEstates } from "../../actions/estatesActions";
import { reducer } from "../../reducers/estateReducer";

const useEstates = () => {
  const initialState: any[] = [];
  const [loading, setLoading] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setLoading(true);
    getEstates(dispatch,{ limit: 20, page: 1 },setLoading);
  }, []);

  return { loading,state, dispatch };
};

export default useEstates;
