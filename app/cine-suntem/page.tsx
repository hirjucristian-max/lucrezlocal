export default function CineSuntemPage() {
  return (
    <main className="container" style={{ padding: "40px 0" }}>
      {/* Titlu principal */}
      <section style={{ marginBottom: "32px" }}>
        <h1 style={{ marginBottom: "12px" }}>Cine suntem?</h1>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          LucrezLocal.ro este un proiect născut dintr-o idee simplă: 
          <strong> oamenii au nevoie de profesioniști buni, aproape de ei</strong>, 
          iar profesioniștii au nevoie de un loc clar unde să poată fi găsiți.
        </p>
      </section>

      {/* Echipa / fondatorii */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "10px" }}>O echipă mică, cu planuri mari</h2>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          În spatele LucrezLocal.ro se află o echipă mică de oameni care îmbină
          experiența în antreprenoriat, servicii locale și dezvoltare web. 
          Ne-am lovit ani de zile de aceeași problemă: este greu să găsești 
          rapid pe cineva de încredere pentru o lucrare, o reparație sau un serviciu.
        </p>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          De aici a pornit ideea unei platforme dedicate exclusiv 
          <strong>serviciilor locale din România</strong>, construită pas cu pas,
          cu atenție la detalii și la nevoile reale ale oamenilor.
        </p>
      </section>

      {/* Valorile noastre */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "10px" }}>Valorile noastre</h2>
        <ul
          style={{
            paddingLeft: "20px",
            maxWidth: "720px",
            lineHeight: 1.6,
          }}
        >
          <li>
            <strong>Onestitate</strong> – comunicare clară, fără promisiuni
            pe care nu le putem respecta.
          </li>
          <li>
            <strong>Respect pentru timpul oamenilor</strong> – vrem să îți
            fie ușor să găsești ce cauți, fără să pierzi ore întregi căutând.
          </li>
          <li>
            <strong>Sprijin pentru afacerile locale</strong> – credem în
            puterea micilor antreprenori și meșteri români.
          </li>
          <li>
            <strong>Dezvoltare continuă</strong> – platforma va evolua constant,
            pe baza feedback-ului primit de la clienți și prestatori.
          </li>
        </ul>
      </section>

      {/* De ce lucrăm la LucrezLocal.ro */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "10px" }}>De ce LucrezLocal.ro?</h2>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          Pentru că știm cât de prețios este timpul tău și cât de important 
          este să lucrezi cu oameni serioși. 
          LucrezLocal.ro nu este un simplu site de anunțuri, ci o poartă de 
          intrare către o rețea de profesioniști locali care vor să construiască 
          relații pe termen lung cu clienții lor.
        </p>
      </section>

      {/* Invitatie */}
      <section>
        <h2 style={{ marginBottom: "10px" }}>Hai cu noi mai departe</h2>
        <p style={{ maxWidth: "720px", lineHeight: 1.6 }}>
          Dacă ești client, începe prin a căuta serviciul de care ai nevoie.  
          Dacă ești prestator, te invităm să îți creezi profilul și să faci parte 
          din comunitatea LucrezLocal.ro.  
          Aici, fiecare colaborare bună contează.
        </p>
      </section>
    </main>
  );
}
