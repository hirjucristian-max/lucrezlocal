"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#0f172a",
        color: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div
        className="container nav"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "12px 16px",
          gap: "20px",
        }}
      >
        {/* Brand */}
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="dot"></span>
          <Link href="/" aria-label="LucrezLocal.ro" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 600 }}>
            LucrezLocal.ro
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "18px",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ color: "#fff" }}>Acasă</Link>
          <Link href="/categorii" style={{ color: "#fff" }}>Categorii</Link>
          <Link href="/cum-functioneaza" style={{ color: "#fff" }}>Cum funcționează</Link>
          <Link href="/cine-suntem" style={{ color: "#fff" }}>Cine suntem</Link>
          <Link href="/contact" style={{ color: "#fff" }}>Contact</Link>

          {/* CTA */}
          <Link
            className="cta"
            href="/devino-prestator"
            style={{
              background: "#38bdf8",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: 600,
              color: "#0f172a",
            }}
          >
            Devino prestator
          </Link>

          {/* Account */}
          <Link href="/cont" style={{ marginLeft: "10px", fontSize: "1.3rem" }}>
            👤
          </Link>
        </nav>
      </div>
    </header>
  );
}
