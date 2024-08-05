import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {useDispatchCart, useCart} from './CartContext'
import {useNavigate} from 'react-router-dom'

const Shop = () => {
  let dispatch = useDispatchCart()
  let dada = useCart(initTodo)
  const [info, setInfo] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios.get("http://localhost:3000/getAll").then((result) => {
        setInfo(result.data);
      }).catch((err) => console.log(err));
  };

  const HandleSearch = (e)=>{
    let key = e.target.value;
    axios.get(`http://localhost:3000/search/${key}`).then(result =>{
      if (result) {
        setInfo(result.data)
      }
    }).catch(err => console.log(err))
  }

 const AddtoCart = (product)=>{
  dispatch({type : "ADD", ...product})
 }

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
          <div className="search-product arrange-left wid-50">
            <input type="text" placeholder="Search for Products" onChange={HandleSearch}/>
          </div>
        </div>
      </div>
      <div className="full-banner-warapper">
        <div className="wrapper next-row">
          <div className="sort-options">
            <select name="" id="">
              <option value="1">By Name</option>
              <option value="2">By Rating</option>
              <option value="3">By Latest</option>
            </select>
          </div>
          <div className="wid-75 arrange-left">
              {info.map((curElem) => {
                return (
                  <div className="wid-33 arrange-left" key={curElem._id}>
                  <div className="cart">
                    <div>
                      <img src={`http://localhost:3000/${curElem.file}`}/>
                    </div>
                    <div className="cart-details">
                      <h6 className="name-head">{curElem.name}</h6>
                      <div className="cart-price">
                        <h6 className="current">${curElem.price}</h6>
                        <h6 className="last">$130.00</h6>
                      </div>
                    </div>
                    <div className="cart-footer">            
                      <Link to='/cart'>
                       <button  onClick={()=> AddtoCart({...curElem})}>Add to Cart</button>
                      </Link>
                    </div>
                  </div>
            </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
