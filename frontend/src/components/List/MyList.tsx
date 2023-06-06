import React from "react";
import { List } from "@material-ui/core";
import MyListItem from "./MyListItem";
import { Estate } from "../../types/types";

interface MyListProps {
  data: Estate[];
}

const MyList: React.FC<MyListProps> = ({ data }) => {
  return (
    <List>
      {data?.map((item: any) => (
        <MyListItem key={item.id} item={item} />
      ))}
    </List>
  );
};

export default MyList;
