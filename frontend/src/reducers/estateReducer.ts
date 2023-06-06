import { TYPES } from "../actions/types";
import { state } from "../types/types";

export const reducer = (
  state: any,
  action: { type: string; payload: state }
) => {
  switch (action.type) {
    case TYPES.LIST_ESTATES:
      return {
        data: action.payload.data.map((element) => {
          return {
            id: element.id,
            title: element.title,
            location: element.location,
            price: element.price,
            images: element.images.map(
              (image) => typeof image === "string" && JSON.parse(image)
            ),
          };
        }),
        length: action.payload.length,
      };
    case TYPES.ERROR:
      return action.payload;
    default:
      return state;
  }
};
