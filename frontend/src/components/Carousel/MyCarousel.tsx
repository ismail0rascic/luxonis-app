import React from "react";

import Carousel from "react-material-ui-carousel";

import useStyles from "./style";

import { image } from "../../types/types";

interface MyCarouselProps {
  items: image[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ items }) => {
  const { carousel } = useStyles();

  return (
    <Carousel className={carousel}>
      {items.map((item, i) => (
        <img key={i} src={item.href} alt={`loading ${i}`} />
      ))}
    </Carousel>
  );
};

export default MyCarousel;
