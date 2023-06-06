import React from "react";

import { ListItem } from "@material-ui/core";
import MyCarousel from "../Carousel/MyCarousel";
import MyListItemText from "./MyListItemText";

import useStyles from "./style";

import { Estate, image } from "../../types/types";

interface MyListItemProps {
  item: Estate;
}

const MyListItem: React.FC<MyListItemProps> = ({ item }) => {
  const { images } = item;

  const { listItem } = useStyles();
  return (
    <ListItem className={listItem}>
      <MyListItemText item={item} />
      <MyCarousel items={images as image[]} />
    </ListItem>
  );
};

export default MyListItem;
