import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../static/cart/cart.css";
import { Link } from 'react-router-dom'

function Cart() {
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();
  let items = useSelector((state) => state.cartReducer);
  
  useEffect(() => {
    setSubtotal(
      items.reduce((acc, curr) => acc + Number(curr.cart.price) * curr.cart.qty, 0)
    )
  },[items])

  useEffect(() => {
    console.log("Subtotal", subtotal)
    dispatch({
      type: "SUBTOTAL",
      payload: {
        subtotal
      }
    })
  }, [subtotal])

  function increment(id, qty) {
    console.log("qty", qty);
    dispatch({
      type: "INCREMENT",
      payload: {
        id,
        qty,
      },
    });
  }

  function decrement(id, qty) {
    dispatch({
      type: "DECREMENT",
      payload: {
        id,
        qty,
      },
    });
  }

  function deleteItem(id) {
    console.log("yes")
    dispatch({
      type: "DELETE",
      payload: {
        id
      }
    })
  }

  // function cartAmount() {
  //   dispatch({
  //     type: "SUBTOTAL",
  //     payload: {
  //       subtotal
  //     }
  //   })
  // }

  return (
    <div className="cart">
      <div className="cart_cont">
        <div className="cart_left">
          <h3>Shopping Cart</h3>
          <div className="cart_border"></div>
          <div className="cart_products">
            {items.length ? (
              items.map((item, key) => {
                return (
                  <div className="cart_item" key={key}>
                    <div className="cart_item_img">
                      <img src={item.cart.img} alt="img" />
                    </div>
                    <div className="cart_item_detail">
                      <h3>{item.cart.title}</h3>
                      <h4>{item.cart.description}</h4>
                      <p>In Stock: {item.cart.stock}</p>
                      <div className="cart_btns">
                        <button
                          className="dec"
                          onClick={() =>
                            decrement(item.cart.id, item.cart.qty - 1)
                          }
                        >
                          -
                        </button>
                        <p>{item.cart.qty}</p>
                        <button
                          className="inc"
                          onClick={() =>
                            increment(item.cart.id, item.cart.qty + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button className="delete" onClick={() => deleteItem(item.cart.id)}>Remove</button>
                      </div>
                    </div>
                    <div className="cart_price">
                      <p>{item.cart.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>Oops! your cart is empty</h3>
            )}
          </div>
        </div>

        <div className="cart_right">
          <p>Subtotal({items.length} items):</p>
          <p>{subtotal}</p>
          <div className="cart_payment">
            <Link to="/payment"><button className="payment">Ready To Checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
