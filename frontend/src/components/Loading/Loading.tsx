import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useStyles from "./style";

const Loading: React.FC = () => {
  const { loading, message } = useStyles();
  return (
    <Box className={loading}>
      <span className={message}>
        If database is not set yet, loading will be use more time ...
      </span>
      &nbsp; &nbsp;
      <CircularProgress />
    </Box>
  );
};

export default Loading;
