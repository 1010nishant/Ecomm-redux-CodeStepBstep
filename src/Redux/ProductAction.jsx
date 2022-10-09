import { PRODUCT_LIST, SEARCH_PRODUCT } from "./Constant";


export const productList = () => {
  let data = "hello"
  console.warn("action called productlist", data);
  return {
    type: PRODUCT_LIST,
    // data, //this is commented
  };
};
export const productSearch = (query) => {

  return {
    type: SEARCH_PRODUCT,
    query
  }
}



export default productList