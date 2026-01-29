import fs from "fs/promises";
import path from "path";

type Subcat = { name: string; slug: string };
type Category = { name: string; slug: string; icon?: string; subcategories?: Subcat[] };
type Taxonomy = { categories: Category[] };

async function getTaxonomy(): Promise<Taxonomy> {
  const file = path.join(process.cwd(), "public", "assets", "taxonomy.json");
  const json = await fs.readFile(file, "utf-8");
  return JSON.parse(json);
}

export async function generateStaticParams() {
  const data = await getTaxonomy();
  return (data.categories || []).map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const data = await getTaxonomy();
  const cat = (data.categories || []).find((c) => c.slug === params.slug);

  if (!cat) {
    return (
      <main className="container" style={{ padding: "48px 16px" }}>
        <h1>Categorie indisponibilă</h1>
        <p>Nu am găsit categoria: {params.slug}</p>
      </main>
    );
  }

  return (
    <main>
      <section className="container" style={{ background: "var(--card)", padding: "48px 16px" }}>
        <h1 style={{ fontSize: "56px", lineHeight: 1.1 }}>{cat.name}</h1>
        <div className="card" style={{ marginTop: 24 }}>
          <strong>Subcategorii</strong>
        </div>

        <div
          className="chips"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          {(cat.subcategories || []).map((s) => (
            <a
              key={s.slug}
              className="card"
              href={`/categorii/${cat.slug}/${s.slug}`}
              style={{ padding: "24px" }}
            >
              <strong>{s.name}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
