"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#fff", marginTop: "40px" }}>
      <div
        className="container"
        style={{
          padding: "40px 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Column 1 - Brand */}
        <div>
          <div className="brand" style={{ color: "#fff", marginBottom: "12px" }}>
            <span className="dot"></span>
            <Link href="/" style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 600 }}>
              LucrezLocal.ro
            </Link>
          </div>
          <p style={{ opacity: 0.8, maxWidth: "260px", lineHeight: 1.5 }}>
            Platformă dedicată serviciilor locale.  
            Pilot în Focșani, extindere națională în curs.
          </p>

          <div style={{ marginTop: "14px", display: "flex", gap: "12px" }}>
            <a href="#" aria-label="Facebook" style={{ fontSize: "1.4rem" }}>👍</a>
            <a href="#" aria-label="Instagram" style={{ fontSize: "1.4rem" }}>📸</a>
            <a href="#" aria-label="TikTok" style={{ fontSize: "1.4rem" }}>🎵</a>
            <a href="#" aria-label="YouTube" style={{ fontSize: "1.4rem" }}>▶️</a>
          </div>
        </div>

        {/* Column 2 - Linkuri utile */}
        <div>
          <h3 style={{ marginBottom: "12px", fontWeight: 600 }}>Companie</h3>
          <p><Link href="/despre-noi">Despre noi</Link></p>
          <p><Link href="/cine-suntem">Cine suntem</Link></p>
          <p><Link href="/contact">Contact</Link></p>
          <p><Link href="/blog">Blog / Sfaturi utile</Link></p>
        </div>

        {/* Column 3 - Servicii */}
        <div>
          <h3 style={{ marginBottom: "12px", fontWeight: 600 }}>Servicii</h3>
          <p><Link href="/categorii">Toate categoriile</Link></p>
          <p><Link href="/devino-prestator">Devino prestator</Link></p>
          <p><Link href="/cum-functioneaza">Cum funcționează</Link></p>
          <p><Link href="/ajutor">Ajutor / FAQ</Link></p>
        </div>

        {/* Column 4 - Legal */}
        <div>
          <h3 style={{ marginBottom: "12px", fontWeight: 600 }}>Legal</h3>
          <p><Link href="/termeni">Termeni & Condiții</Link></p>
          <p><Link href="/confidentialitate">Politica de confidențialitate</Link></p>
          <p><Link href="/cookies">Politica de cookies</Link></p>
          <p><Link href="/gdpr">Prelucrarea datelor personale</Link></p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.1)",
          textAlign: "center",
          padding: "12px",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} LucrezLocal.ro – Toate drepturile rezervate
      </div>
    </footer>
  );
}
