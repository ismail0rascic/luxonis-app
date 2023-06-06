import { Pagination, PaginationProps } from "@mui/material";
import React from "react";
import useStyles from "./style";

interface MyPaginationProps extends PaginationProps {
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const MyPagination: React.FC<MyPaginationProps> = ({
  count,
  page,
  handleChange,
}) => {
  const { paginationContainer } = useStyles();
  return (
    <div className={paginationContainer}>
      <Pagination
        size="large"
        color="standard"
        variant="outlined"
        count={count}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyPagination;
