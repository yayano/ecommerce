"use client";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div id="products">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlForImage(image && image[0])}
            alt={image.name}
            width={250}
            height={250}
            className="product-image"
          />
          <div className="product-name">{name}</div>
          <div className="product-price">${price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
