export default function Artigos() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Artigos</h1>

      <a
        href="/artigos/barbearia"
        className="block border p-6 rounded-lg hover:shadow-md transition"
      >
        <h2 className="text-xl font-semibold mb-2">
          Ela corta cabelo em um espaço onde ainda precisa provar que pertence
        </h2>
        <p className="text-gray-600">
          Uma história real sobre ser mulher em um ambiente dominado por homens.
        </p>
      </a>
    </main>
  );
}
