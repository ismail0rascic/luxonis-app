import React from "react";
import { ListItemText } from "@material-ui/core";

import useStyles from "./style";

import { Estate } from "../../types/types";

interface MyListItemProps {
  item: Estate;
}

const MyListItemText: React.FC<MyListItemProps> = ({ item }) => {
  const {
    listItemTextPrimary,
    listItemTextSecondary,
    textColor,
    TextEndPosition,
  } = useStyles();

  const { location, price, title } = item;

  return (
    <div>
      <ListItemText
        primary={
          <span className={`${listItemTextPrimary} ${textColor}`}>
            {title}
          </span>
        }
        secondary={
          <span className={listItemTextSecondary}>{location}</span>
        }
      />
      <ListItemText
        secondary={
          <span
            className={`${listItemTextSecondary} ${textColor} ${TextEndPosition}`}
          >
            {price} CZK
          </span>
        }
      />
    </div>
  );
};

export default MyListItemText;
