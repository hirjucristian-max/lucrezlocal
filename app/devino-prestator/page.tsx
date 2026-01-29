"use client";

import { useEffect, useState } from "react";

export default function DevinoPrestatorPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [subcats, setSubcats] = useState<any[]>([]);
  const [step, setStep] = useState(0);

  // Încarcă taxonomy.json pentru categorii
  useEffect(() => {
    fetch("/assets/taxonomy.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const handleCategory = (slug: string) => {
    const found = categories.find((c) => c.slug === slug);
    setSubcats(found ? found.subcategories : []);
  };

  return (
    <main className="container" style={{ padding: "24px 16px" }}>
      <h1>Adaugă serviciu</h1>
      <p className="lead">
        Completează pașii de mai jos pentru a-ți publica serviciul pe platformă.
        Cererile sunt moderate manual în faza pilot.
      </p>

      {/* Bara de pași – folosim exact clasele .steps / .step ca în HTML */}
      <div className="steps">
        <button
          type="button"
          className={`step ${step === 0 ? "active" : ""}`}
          onClick={() => setStep(0)}
        >
          1. Detalii serviciu
        </button>
        <button
          type="button"
          className={`step ${step === 1 ? "active" : ""}`}
          onClick={() => setStep(1)}
        >
          2. Locație & preț
        </button>
        <button
          type="button"
          className={`step ${step === 2 ? "active" : ""}`}
          onClick={() => setStep(2)}
        >
          3. Contact & publicare
        </button>
      </div>

      {/* Formular Netlify – structură identică cu HTML-ul inițial */}
      <form
        name="adauga-serviciu"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="wizard"
      >
        <input type="hidden" name="form-name" value="adauga-serviciu" />

        {/* Honeypot ascuns – EXACT ca în HTML (display:none) */}
        <p style={{ display: "none" }}>
          <label>
            Nu completa: <input name="bot-field" />
          </label>
        </p>

        {/* === PAGINA 1 – DETALII SERVICIU === */}
        {step === 0 && (
          <section className="page active" data-page="1">
            <div className="card">
              <div className="grid2">
                <p>
                  <label>
                    Titlul serviciului
                    <br />
                    <input
                      name="titlu"
                      placeholder="Ex: Instalator autorizat – intervenții rapide"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Categoria
                    <br />
                    <select
                      name="categorie"
                      required
                      onChange={(e) => handleCategory(e.target.value)}
                    >
                      <option value="">— Alege categorie —</option>
                      {categories.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </p>
              </div>

              <div className="grid2">
                <p>
                  <label>
                    Subcategoria
                    <br />
                    <select name="subcategorie" required>
                      <option value="">
                        — Selectează o categorie mai sus —
                      </option>
                      {subcats.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </p>
                <p>
                  <label>
                    Disponibilitate
                    <br />
                    <select name="disponibilitate">
                      <option>Zilnic</option>
                      <option>Luni–Vineri</option>
                      <option>Doar weekend</option>
                      <option>La programare</option>
                    </select>
                  </label>
                </p>
              </div>

              <p>
                <label>
                  Descriere detaliată
                  <br />
                  <textarea
                    name="descriere"
                    rows={6}
                    placeholder="Explică pe scurt ce oferi, experiența, certificări, ce este inclus în preț, termene, garanții."
                    required
                  />
                </label>
              </p>

              <div className="drop">
                <label>
                  Imagini (max. 6)
                  <br />
                  <input
                    type="file"
                    name="imagini"
                    multiple
                    accept="image/*"
                  />
                </label>
                <p className="hint">
                  Poți încărca poze înainte/după, echipamente, certificări. (În
                  faza pilot, imaginile se transmit ca atașamente la formular.)
                </p>
              </div>

              <div className="actions">
                <span></span>
                <button type="button" onClick={() => setStep(1)}>
                  Continuă →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* === PAGINA 2 – LOCAȚIE & PREȚ === */}
        {step === 1 && (
          <section className="page active" data-page="2">
            <div className="card">
              <div className="grid3">
                <p>
                  <label>
                    Oraș / Localitate
                    <br />
                    <input
                      name="oras"
                      placeholder="Ex: Focșani"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Județ
                    <br />
                    <input
                      name="judet"
                      placeholder="Ex: Vrancea"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Acoperire (raza km)
                    <br />
                    <input
                      name="raza"
                      type="number"
                      min={0}
                      placeholder="Ex: 30"
                    />
                  </label>
                </p>
              </div>

              <div className="grid3">
                <p>
                  <label>
                    Preț orientativ
                    <br />
                    <input
                      name="pret"
                      type="number"
                      min={0}
                      step="0.01"
                      placeholder="Ex: 150"
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Unitate preț
                    <br />
                    <select name="unitate">
                      <option>pe oră</option>
                      <option>pe lucrare</option>
                      <option>pe vizită</option>
                    </select>
                  </label>
                </p>
                <p>
                  <label>
                    Disponibil începând cu
                    <br />
                    <input name="data_start" type="date" />
                  </label>
                </p>
              </div>

              <p className="hint">
                Prețul este orientativ și poate fi stabilit exact după
                discuție.
              </p>

              <div className="actions">
                <button type="button" onClick={() => setStep(0)}>
                  ← Înapoi
                </button>
                <button type="button" onClick={() => setStep(2)}>
                  Continuă →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* === PAGINA 3 – CONTACT & PUBLICARE === */}
        {step === 2 && (
          <section className="page active" data-page="3">
            <div className="card">
              <div className="grid2">
                <p>
                  <label>
                    Nume / Firmă
                    <br />
                    <input name="nume" required />
                  </label>
                </p>
                <p>
                  <label>
                    CUI (opțional)
                    <br />
                    <input
                      name="cui"
                      placeholder="Ex: RO12345678"
                    />
                  </label>
                </p>
              </div>

              <div className="grid3">
                <p>
                  <label>
                    Telefon
                    <br />
                    <input name="telefon" required />
                  </label>
                </p>
                <p>
                  <label>
                    Email
                    <br />
                    <input type="email" name="email" required />
                  </label>
                </p>
                <p>
                  <label>
                    Website / Social (opțional)
                    <br />
                    <input
                      name="website"
                      placeholder="Ex: https://facebook.com/…"
                    />
                  </label>
                </p>
              </div>

              <p>
                <label>
                  <input type="checkbox" name="termeni" required /> Sunt de
                  acord cu Termenii și Politica de confidențialitate.
                </label>
              </p>

              <div className="actions">
                <button type="button" onClick={() => setStep(1)}>
                  ← Înapoi
                </button>
                <button type="submit">Publică serviciul</button>
              </div>
            </div>
          </section>
        )}
      </form>
    </main>
  );
}
