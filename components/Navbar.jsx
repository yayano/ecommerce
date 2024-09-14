"use client";
import React from "react";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContexte } from "../contexte/StateContext";
//animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContexte();
  useGSAP(() => {
    gsap.to(".logo", {
      ease: "power1.inOut",
      opacity: 1,
      x: 10,
    });
  }, []);
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Promo Phone</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
