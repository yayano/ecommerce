"use client"
import { urlForImage } from '@/sanity/lib/image'
import React,{useState} from 'react'
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineStar,
     AiFillStar
  } from "react-icons/ai";
  import { useStateContexte } from '@/contexte/StateContext';
const ProductManagement = ({product}) => {
    const {incQty,decQty,qty,onAdd} = useStateContexte()
    const [index,setIndex] = useState(0)
    //const [qty,setQty] = useState(1)
    const{image,name,price,details,_id} = product
    
    
      
  return (
      < div className="product-detail-container">
        <div>
            <div className="image-container">
                <img src={urlForImage(image && image[index])} className="product-detail-image" />
           </div>
            <div className="small-images-container">
                {image?.map((item, i) => (
                  <img 
                    key={i}
                    src={urlForImage(item)}
                    className={i === index ? 'small-image selected-image' : 'small-image'}
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
            </div>
        </div>
        
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">da{price * qty}</p>

          <div className="quantity">
            <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
              </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>onAdd(product,qty)}>
              Add to cart
            </button>
            <button type="button" className="buy-now" onClick="">
              Buy now
            </button>
          </div>
         </div>
</div>
  )
}

export default ProductManagement