import axios from "axios";

import { API_URL, BASE_URL, PAGES_LIMIT } from "../config/config";

let page = 1;

(async () => {
  try {
    while (PAGES_LIMIT >= page) {
      const response = await axios.get(API_URL, {
        params: {
          page: page,
          category_main_cb: 1,
          category_type_cb: 1,
        },
      });
      const estates = response.data._embedded.estates || [];

      for (const estate of estates) {
        const item = {
          title: estate.name || "",
          location: estate.locality || "",
          price: estate.price || 0,
          images: estate._links.images || [],
        };
        
        await axios.post(`${BASE_URL}/api/estates`, item);
      }
      page += 1;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
