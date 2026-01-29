import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: "LucrezLocal.ro – Găsește rapid serviciul potrivit",
  description: "Profesioniști locali, verificați, aproape de tine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
