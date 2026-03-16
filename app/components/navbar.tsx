"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link href="/">Accueil</Link>
        </li>
        <li style={liStyle}>
          <Link href="/musees">Musées</Link>
        </li>
        <li style={liStyle}>
          <Link href="/visites">Visites</Link>
        </li>
        <li style={liStyle}>
          <Link href="/recommandations">Recommandations</Link>
        </li>
        <li style={liStyle}>
          <Link href="/preferences">Favoris</Link>
        </li>
      </ul>
    </nav>
  );
}

const navStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#f0f0f0",
};

const ulStyle: React.CSSProperties = {
  display: "flex",
  listStyle: "none",
  gap: "20px",
  margin: 0,
  padding: 0,
};

const liStyle: React.CSSProperties = {
  fontWeight: "bold",
};