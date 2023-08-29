import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IAboutBoxProps {
  id: string;
  text: string;
}

interface IProductBoxProps {
  title: string;
  description: string;
  price: number;
}

interface IProfileBoxProps {
  name: string;
  role: string;
  description: string;
  thumbnail: string;
}

export default function AboutBox({ id, text }: IAboutBoxProps) {
  return (
    <div className="kotak" key={id}>
      <Image src="/next.svg" alt="" width={50} height={10} />
      <p>{text}</p>
    </div>
  );
}

export function ProductBox({ title, description, price }: IProductBoxProps) {
  return (
    <div className="card">
      <Image
        className="card-image"
        src="/next.svg"
        alt="Gambar Produk"
        width={200}
        height={100}
      />
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-price">${price}</div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

export function ProfileCard({
  name,
  role,
  description,
  thumbnail,
}: IProfileBoxProps) {
  return (
    <div className="profile-card">
      <div className="profile-sidebar">
        <img className="card-image" src={thumbnail} alt="Gambar Produk" />
        <ul className="social-list">
          <li className="social-item">
            <Link className="social-link" href="/dol">
              <img src="/facebook.png" width={20} />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" href="/dol">
              <img src="/instagram.png" width={20} />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" href="/dol">
              <img src="/linkedin.png" width={20} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="profile-main">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-position">{role}</p>
        <p className="profile-body">{description}</p>
      </div>
    </div>
  );
}
