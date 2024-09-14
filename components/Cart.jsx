"use client"
import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping } from 'react-icons/ai'
import {TiDeleteOutline} from "react-icons/ti"
import toast from 'react-hot-toast'

import { useStateContexte } from '@/contexte/StateContext'
import { urlForImage } from '@/sanity/lib/image'
const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart,toggleCartItemQuanitity,onRemove} = useStateContexte()
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className="cart-container">
        <button
        type='button'
        className='cart-heading'
        onClick={()=>setShowCart(false)}
        >
          <AiOutlineLeft/>
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150}/>
            <h3>You shopping bag is empty</h3>
            <Link href="/">
              <button
              type='button'
              onClick={()=>setShowCart(false)}
              className='btn'
              >Continue Shopping</button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item,index)=>(
            <div className="product" key={item._id}>
              <img src={urlForImage(item?.image[0])}  className='cart-product-image' />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.price} da</h4>
                </div>
              <div className="flex bottom">
                <div>
                <p className="quantity-desc">
                <span className="minus" onClick={()=>toggleCartItemQuanitity(item._id,'dec')}><AiOutlineMinus /></span>
                <span className="num">{item.quantity}</span>
                <span className="plus" onClick={()=>toggleCartItemQuanitity(item._id,'inc')}><AiOutlinePlus /></span>
                </p>
                </div>
                <button type='button' className='remove-item' onClick={()=>onRemove(item)}>
                  <TiDeleteOutline/>
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal : </h3>
              <h3>{totalPrice} da</h3>
            </div>
            <div className="btn-container">
              <button type='button' className='btn' >Pay with Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart