import { PRODUCT_LIST } from "./Constant";


export const productList = () => {
    let data = "hello"
    console.warn("action called productlist", data);
    return {
      type: PRODUCT_LIST,
      // data,
    };
  };

export default productList