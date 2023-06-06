import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loading: {
    marginTop: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "blue",
  },
}));
export default useStyles;
