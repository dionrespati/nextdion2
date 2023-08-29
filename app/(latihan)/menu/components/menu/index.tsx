"use client";

import React, { useState } from "react";
import "../../css/menu2.css";
import Link from "next/link";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function openMenu(e: React.MouseEvent<HTMLDivElement>) {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <header>
        <div className="logo">
          <h2>JajanTerus</h2>
        </div>
        {/* <input type="checkbox" id="nav-toggle" className="nav-toggle" /> */}
        <div className="menuToggle"></div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">
                Our Products<b>&#9660;</b>
              </Link>
              <ul>
                <li>
                  <Link href="">Produk 1</Link>
                </li>
                <li>
                  <Link href="">Produk 2</Link>
                </li>
                <li>
                  <Link href="">Produk 3</Link>
                </li>
                <li>
                  <Link href="">Produk Pilihan&nbsp;&#9654;</Link>
                  <ul>
                    <li>
                      <Link href="">Pilihan 1</Link>
                    </li>
                    <li>
                      <Link href="">Pilihan 2</Link>
                    </li>
                    <li>
                      <Link href="">Pilihan 3</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="">
                Our Promos<b>&#9660;</b>
              </Link>
              <ul>
                <li>
                  <Link href="">Promo 1</Link>
                </li>
                <li>
                  <Link href="">Promo 2</Link>
                </li>
                <li>
                  <Link href="">Promo 3</Link>
                </li>
                <li>
                  <Link href="">Promo 4 &nbsp;&#9654;</Link>
                  <ul>
                    <li>
                      <Link href="">Pilihan yang banyak</Link>
                    </li>
                    <li>
                      <Link href="">Pilihan 2</Link>
                    </li>
                    <li>
                      <Link href="">Pilihan 3</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </>
  );
}
