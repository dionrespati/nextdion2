import React from "react";
import "./about.css";
import "./profile.css";

import { ProductBox, ProfileCard } from "./components/about-box";

export default function About() {
  const aboutData = [
    "About Box 1",
    "About Box 2",
    "About Box 3",
    "About Box 4",
    "About Box 5",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, aperiam! Dicta, minus? Autem atque aut ad odio possimus. Ab quasi atque molestiae delectus! Animi nihil commodi provident voluptas magni totam!",
    "About Box 7",
  ];

  const ProductData = [
    {
      id: 1,
      title: "Produk 1",
      description:
        "Produk yang sangat mengedepankan kualitas, berukuran 36B Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, aperiam! Dicta, minus? Autem atque aut ad odio possimus",
      price: 10,
    },
    { id: 2, title: "Produk 2", description: "Descripsi 2", price: 20 },
    { id: 3, title: "Produk 3", description: "Descripsi 3", price: 30 },
  ];

  const profileData = {
    name: "Dion Respati",
    role: "Fullstack Developer",
    description:
      "Dion Respati adalah seorang programmer yang belum berpengalaman namun sering dikira jago padahal tidak. Bahasa pemrograman yang dikuasai adalah PHP, javascript. Jenis aplikasi yang dibuat adalah web based. HTML, CSS, react / next.js adalah bahasa yang kurang dikuasai olehnya",
    thumbnail: "/dion.jpg",
  };

  return (
    <>
      <header>Ini adalah header</header>
      <div className="about-container">
        <div className="leftbar">Disini menu Kiri</div>
        <div className="mainbar">
          {ProductData.map((item, index) => (
            <ProductBox
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        <div className="rightbar">
          Disini menu kanan asdadadadbdgfs s sfsfsfsd
        </div>
      </div>
      {/* <div>
        <ProfileCard
          name={profileData.name}
          role={profileData.role}
          description={profileData.description}
          thumbnail={profileData.thumbnail}
        />
      </div> */}
      <footer>
        <div className="footer-logo">Logo</div>
        <div className="footer-content">
          <ul>
            asdad
            <li>Satu</li>
            <li>Dua</li>
            <li>Tiga</li>
            <li>Empat</li>
            <li>Lima</li>
          </ul>
          <ul>
            asdad
            <li>Satu</li>
            <li>Dua</li>
            <li>Tiga</li>
            <li>Empat</li>
            <li>Lima</li>
          </ul>
          <ul>
            asdad
            <li>Satu</li>
            <li>Dua</li>
            <li>Tiga</li>
            <li>Empat</li>
            <li>Lima</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
