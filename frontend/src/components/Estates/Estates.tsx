import React from "react";
import MyList from "../List/MyList";
import useEstates from "./useEstates";
import { Container } from "@material-ui/core";
import EstatesPagination from "./EstatesPagination";
import Loading from "../Loading/Loading";

const Estates: React.FC = () => {
  const { loading,state, dispatch } = useEstates();
  const { length, data } = state;

  return (
    <Container>
      {loading && <Loading />}
      <MyList data={data} />
      {!loading && (
        <EstatesPagination
          length={length}
          dispatch={dispatch}
        />
      )}
    </Container>
  );
};

export default Estates;
