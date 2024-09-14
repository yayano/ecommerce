import React from "react";
import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "@/sanity/lib/client";

export default async function Page() {
  const { product, bannerData } = await getServerSideData();
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations </p>
      </div>
      <div className="products-container">
        {product?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export async function getServerSideData() {
  const query = `*[_type== 'product']`;
  const product = await client.fetch(query);

  const bannerQuery = `*[_type== 'banner']`;
  const bannerData = await client.fetch(bannerQuery);
  return { product, bannerData };
}
