import React from "react";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
        </div>
        <div className="right">
          <p> {smallText} </p>
          <h3> {midText} </h3>
          <p> {desc} </p>
          <Link href="#products">
            <button type="button"> {buttonText} </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
