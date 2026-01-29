import Link from "next/link";
import fs from "fs/promises";
import path from "path";

type Subcat = { name: string; slug: string };
type Category = {
  name: string;
  slug: string;
  icon?: string;            // emoji / icon, dacă există în taxonomy.json
  subcategories?: Subcat[]; // le folosim ca descriere scurtă
};
type Taxonomy = { categories: Category[] };

async function getTaxonomy(): Promise<Taxonomy> {
  const file = path.join(process.cwd(), "public", "assets", "taxonomy.json");
  const json = await fs.readFile(file, "utf-8");
  return JSON.parse(json);
}

export default async function CategoriiPage() {
  const data = await getTaxonomy();
  const categories = data.categories || [];

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 style={{ marginBottom: "10px" }}>Categorii de servicii</h1>
      <p style={{ marginBottom: "30px", maxWidth: "640px" }}>
        Alege categoria potrivită pentru tine și descoperă profesioniști locali
        disponibili în zona ta.
      </p>

      <div
        className="categories-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map((cat) => {
          const subtitle = (cat.subcategories || [])
            .slice(0, 2) // primele 2 subcategorii ca text, ca pe Home
            .map((s) => s.name)
            .join(" • ");

          return (
            <Link
              key={cat.slug}
              href={`/categorii/${cat.slug}`}
              className="category-card card"
              style={{
                padding: "18px 20px",
                borderRadius: "16px",
                textDecoration: "none",
                display: "block",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                {cat.icon && (
                  <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>
                    {cat.icon}
                  </span>
                )}

                <div>
                  <h2
                    style={{
                      marginBottom: "6px",
                      fontSize: "1.05rem",
                    }}
                  >
                    {cat.name}
                  </h2>

                  {subtitle && (
                    <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
