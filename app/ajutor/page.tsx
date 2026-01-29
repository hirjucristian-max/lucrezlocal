export default function AjutorPage() {
  return (
    <main className="container" style={{ padding: "40px 0" }}>
      {/* Titlu principal */}
      <section style={{ marginBottom: "32px" }}>
        <h1 style={{ marginBottom: "12px" }}>Ajutor & Întrebări frecvente</h1>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          Ai întrebări despre cum funcționează LucrezLocal.ro? Mai jos găsești
          răspunsuri la cele mai frecvente situații. Dacă nu găsești ce ai
          nevoie, ne poți contacta oricând.
        </p>
      </section>

      {/* Pentru clienți */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "10px" }}>Pentru clienți</h2>
        <div style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          <h3 style={{ fontSize: "1rem", marginTop: "12px" }}>
            1. Cum găsesc un prestator de servicii?
          </h3>
          <p>
            Folosește bara de căutare de pe pagina principală sau alege o
            categorie de servicii. Apoi selectează prestatorul care ți se
            potrivește și contactează-l direct.
          </p>

          <h3 style={{ fontSize: "1rem", marginTop: "12px" }}>
            2. Trebuie să plătesc ceva pe site?
          </h3>
          <p>
            Nu. Căutarea prestatorilor pe LucrezLocal.ro este gratuită pentru
            clienți. Plățile se fac doar între tine și prestator, conform
            înțelegerii voastre.
          </p>

          <h3 style={{ fontSize: "1rem", marginTop: "12px" }}>
            3. Pot lăsa o recenzie unui prestator?
          </h3>
          <p>
            Da, acolo unde este disponibilă funcția de recenzii. Recomandările
            și feedback-ul tău îi ajută pe alți clienți să aleagă mai ușor.
          </p>
        </div>
      </section>

      {/* Pentru prestatori */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "10px" }}>Pentru prestatori de servicii</h2>
        <div style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          <h3 style={{ fontSize: "1rem", marginTop: "12px" }}>
            4. Cum îmi creez profil de prestator?
          </h3>
          <p>
            Accesează pagina <strong>„Devino prestator”</strong> din meniu și
            completează formularul cu datele tale: nume, servicii, zonă, date
            de contact și o descriere clară.
          </p>

          <h3 style={{ fontSize: "1rem", marginTop: "12px" }}>
            5. Cum îmi actualizez serviciile sau zona acoperită?
          </h3>
          <p>
            Ne poți trimite oricând o solicitare de actualizare, iar noi vom
            modifica profilul tău conform informațiilor primite.
          </p>

          <h3 style={{ fontSize: "1rem", marginTop: "12px" }}>
            6. Percepem comision pentru comenzile primite?
          </h3>
          <p>
            În acest moment, LucrezLocal.ro funcționează ca un director de
            servicii: clienții te contactează direct, iar plățile se fac între
            voi, fără comision perceput de platformă.
          </p>
        </div>
      </section>

      {/* Siguranță și responsabilitate */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "10px" }}>Siguranță & responsabilitate</h2>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          LucrezLocal.ro nu intră în contractul dintre client și prestator.
          Te încurajăm să discuți clar toate detaliile înainte de a începe o
          lucrare: preț, termen de execuție, garanții și condiții de plată.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 style={{ marginBottom: "10px" }}>Ai nevoie de ajutor suplimentar?</h2>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          Dacă ai întâmpinat o problemă tehnică sau ai o întrebare la care nu
          ai găsit răspuns aici, ne poți scrie la adresa:
        </p>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          <strong>Email suport:</strong> suport@lucrezlocal.ro
        </p>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          Îți vom răspunde în cel mai scurt timp posibil și vom încerca să
          găsim cea mai bună soluție pentru tine.
        </p>
      </section>
    </main>
  );
}
