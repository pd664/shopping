import React, { useState, useEffect } from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import "../../static/header/header.css";
import { getToken } from "../../utils/common";
import { Link } from "react-router-dom";
import { category } from "../../redux/action/index";

function Header() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allProducts);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (allCategories.length) {
      allCategories.map((item, key) => {
        if (!categories.includes(item.category)) {
          setCategories([item.category, ...categories]);
        }
      });
    }
  }, [allCategories, categories]);

  function setCategory(cate) {
    dispatch(category(cate));
  }

  return (
    <div className="header">
      <div className="header_content">
        <div className="logo">
          <Link to="/">
            <FaShoppingBag
              className="Shopping_logo"
              size={40}
              onClick={() => setCategory("")}
            />
          </Link>
        </div>
        <div className="header_items">
          {categories.map((item, key) => {
            return (
              <div key={key} className="header_items_content">
                <ul className="header_items_list">
                  <li
                    className="header_items_list_content"
                    onClick={() => setCategory(item)}
                  >
                    <Link to={item}>{item.toUpperCase()}</Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        {/* <div>
          {getToken() === null ? (
            <div className="cred">
              <div className="sign_in">
                <Link to="/sign_in">
                  <button className="sign_in_btn btn">SIGN IN</button>
                </Link>
              </div>
              <div className="sign_up">
                <Link to="sign_up">
                  <button className="sign_up_btn btn">SIGN UP</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <button className="log_out btn">LOG OUT</button>
            </div>
          )}
        </div> */}
        <div>
          <Link to="cart">
            <button className="sign_up_btn btn"><FaShoppingCart
              className="cart_logo"
              size={30}
            />Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
