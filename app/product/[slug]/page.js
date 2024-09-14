import React from "react";

import { client } from "@/sanity/lib/client";

import { Product,ProductManagement } from "@/components";

export default async function ProductDetails({ params }) {
  const { product, products } = await getServerSideData(params.slug);
  const { image, name, details, price,_id } = product;

  return (
    <div>
        <ProductManagement product={{image,name,details,price,_id}}  />
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
async function getServerSideData(slug) {
  const query = `*[_type=='product' && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const productsQuery = `*[_type=='product']`;
  const products = await client.fetch(productsQuery);
  return { product, products };
}
