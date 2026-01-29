export const metadata = {
  title: "Înscriere trimisă – LucrezLocal.ro",
  description: "Mulțumim! Înscrierea ta a fost trimisă cu succes.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-dvh bg-white px-4 py-16">
      <section className="mx-auto w-full max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Mulțumim! ✅</h1>
        <p className="mt-3 text-gray-600">
          Înscrierea ta a fost trimisă cu succes. Te vom contacta în scurt timp pentru verificare și publicare.
        </p>
        <a href="/" className="mt-8 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-medium text-gray-900 hover:bg-yellow-400">
          Înapoi la Home
        </a>
      </section>
    </main>
  );
}
