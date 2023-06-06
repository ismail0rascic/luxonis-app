import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderTop: `3px solid ${theme.palette.secondary.main}`,
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
  },
  listItemText: {
    margin: theme.spacing(2),
  },

  textColor: {
    color: theme.palette.primary.main,
  },
  TextEndPosition: {
    display: "flex",
    justifyContent: "end",
  },
  listItemTextPrimary: {
    fontSize: "40px",
  },
  listItemTextSecondary: {
    fontSize: "20px",
    fontWeight:"bold",
    marginTop: theme.spacing(2),
  },
}));
export default useStyles;
