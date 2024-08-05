import React, { useState } from 'react'
import {useDispatchCart, useCart} from './CartContext'
const Cart = () => {

  let dada = useCart()
  // let dispatch = useDispatchCart()
  
  return (
    <>
      <div className="wrapper">
      <div className="header">
        <div className="logo arrange-left wid-25">
          <h1><span>E</span><span>Comm</span></h1>
        </div>
      </div>
    </div>
    <div className="full-banner-warapper">
      <div className="wrapper next-row">
        <div className="wid-75 arrange-left">
          <div className="cart-details">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  dada.map((item)=>{
                    return (
                      <div>
                        <tr>
                        <td className="text-with-img">
                        <img src={`http://localhost:3000/${item.file}`} />
                      </td>
                      <td><span>${item.price}</span></td>
                      <td>
                        <div className="quantity-input">
                          <button>-</button>
                          <input type="text"  />
                          <button>+</button>
                        </div>
                      </td>
                      <td>$150</td>
                      <td>
                        <i className="fa fa-remove icon custom-delete-button">🥅</i>
                      </td>
                      </tr> 
                      </div>
                    )
                  })
                }                                  
              </tbody>
            </table>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="cart-summary-wrapper">
            <div className="cart-summary-body">
              <div className="cart-summy-item">
                <h6>Sub Total</h6>
                <h6>$150</h6>
              </div>
              <div className="cart-summy-item">
                <h6>Shipping</h6>
                <h6>$100</h6>
              </div>
              </div>
            <div className="total-wrapper">
              <div className="total-head">
                <h4>Total</h4>
                <h4>$160</h4>
              </div>
              <div className="proceed-input">
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart
