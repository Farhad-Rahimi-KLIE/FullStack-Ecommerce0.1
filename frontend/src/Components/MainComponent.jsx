import React, { useEffect, useState } from "react";
import "./style.css";
import "./common.css";
import Banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";
import {useCart} from './CartContext'
import axios from "axios";
const MainComponent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let dada = useCart()
  let auth = localStorage.getItem("users");
  const HandleLogot = () => {
    localStorage.clear();
    navigate("/signup");
  };

  useEffect(() => {
    getThree();
  }, []);

  const getThree = () => {
    axios
      .get("http://localhost:3000/getThree")
      .then((result) => {
        setData(result.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="logo arrange-left wid-25">
            <h1>
              <span>E</span>
              <span>Comm</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="full-banner-warapper">
        <div className="wrapper next-row">
          <div className="banner-area category-list arrange-left wid-25">
            <div className="list-header">
              <h4>Categories</h4>
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
            <ul>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">T-shirts</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">SmartPhones</a>
              </li>
              <li>
                <a href="#">Laptop</a>
              </li>
              <li>
                <a href="#">Jackets</a>
              </li>
              <li>
                <a href="#">Kitchens</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
            </ul>
          </div>
          <div className="wid-75 arrange-left">
            <div className="shop-menu">
              <ul className="left-menu-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li className="dropdown-head">
                  <a href="/cart">Cart {dada.length}</a>
                </li>
                <li>
                  <a href="/product">Add Product</a>
                </li>
              </ul>
              <ul className="right-menu-list">
                {auth ? (
                  <li>
                    <a href="#" onClick={HandleLogot}>
                      Log Out ({JSON.parse(auth).data.user.name})
                    </a>
                  </li>
                ) : (
                  <ul>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/signup">Register</a>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
            <div className="banner">
              <img src={Banner} alt="banner" />
              <div className="banner-text">
                <h4>10% off Your First Order</h4>
                <h3>Fashionable Dress</h3>
                <a className="show-now">Show Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper next-row">
            {data.map((curElem) => {
              return (
                <div className="wid-25 arrange-left" key={curElem._id}>
                <div className="cart">
                  <div>
                    <img src={`http://localhost:3000/${curElem.file}`} />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">{curElem.name}</h6>
                    <div className="cart-price">
                      <h6 className="current">${curElem.price}</h6>
                      <h6 className="last">$130.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <a href="#">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </a>
                  </div>
                </div>
          </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MainComponent;
