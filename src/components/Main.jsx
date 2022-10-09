import { addToCart, emptyCart, removeFromCart } from "../Redux/Action";
import { useDispatch } from "react-redux";
import productList from "../Redux/ProductAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData)
  console.warn("data in main component", data)
  // const product = {
  //   name: "i Phone",
  //   category: "mobile",
  //   price: 10000,
  //   color: "red",
  // };

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div>
      {/* <div>
        <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>remove from cart</button>
      </div> */}
      <div>
        <button onClick={() => dispatch(emptyCart())}>empty cart</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(productList())}>get product list</button>
      </div> */}

      {/* below class is product-container */}
      <div className="productsWrapper">
        {
          // card == product-item
          data.map((item) => <div key={item.id} className="card">
            <img className="product-img" src={item.photo} alt="product_pic" />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Company Name : {item.company_name}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>
              <button className="btn" onClick={() => dispatch(addToCart(item))}>add to cart</button>
              <button className="btn" onClick={() => dispatch(removeFromCart(item.id))}>remove to cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
