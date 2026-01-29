"use client";

import { useEffect, useState } from "react";
import "./globals.css";

type Subcategory = { name: string; slug: string };
type Category = { name: string; slug: string; icon?: string; subcategories?: Subcategory[] };

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/assets/taxonomy.json");
      const data = await res.json();
      setCategories(data.categories || []);
    }
    load();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">Pilot Focșani & împrejurimi</span>
          <h1>
            Găsește rapid <span style={{ color: "var(--accent)" }}>serviciul</span> de care ai nevoie
          </h1>
          <p className="lead">Profesioniști locali, verificați, aproape de tine.</p>

          <form className="search" role="search">
            <input name="q" placeholder="Ex.: instalator, tâmplar, electrician" />
            <input name="loc" placeholder="Focșani, Vrancea" />
            <select name="cat" aria-label="Alege categorie">
              <option value="">— Alege categorie —</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <button type="submit">Caută</button>
          </form>
        </div>
      </section>

      <section className="container" style={{ background: "var(--bg)", padding: "40px 16px" }}>
        <h2>Servicii populare în zona ta</h2>
        <div className="grid" style={{ marginTop: "20px" }}>
          {categories.slice(0, 6).map((cat) => (
            <a key={cat.slug} className="card" href={`/categorii/${cat.slug}`}>
              <div className="ico">{cat.icon || "📦"}</div>
              <strong>{cat.name}</strong>
              <div className="small" style={{ color: "#6b7280" }}>
                {(cat.subcategories || []).slice(0, 2).map((s) => s.name).join(" • ")}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container" style={{ background: "var(--card)", padding: "40px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Categorii principale</h2>
          <a href="/categorii" style={{ color: "var(--accent-2)", fontWeight: 600 }}>Vezi toate →</a>
        </div>

        <div className="grid" style={{ marginTop: "20px" }}>
          {categories.map((cat) => (
            <a key={cat.slug} className="card" href={`/categorii/${cat.slug}`}>
              <div className="ico">{cat.icon || "📦"}</div>
              <strong>{cat.name}</strong>
              <div className="small" style={{ color: "#6b7280" }}>
                {(cat.subcategories || []).slice(0, 2).map((s) => s.name).join(" • ")}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
