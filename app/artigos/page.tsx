import Link from "next/link";

export default function Artigos() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Artigos</h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Textos focados em narrativa, experiência real e construção de
          mensagem.
        </p>

        {/* Lista */}
        <div className="space-y-8">
          <Link
            href="/artigos/barbearia"
            className="block border p-6 rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Ela corta cabelo em um espaço onde ainda precisa provar que
              pertence
            </h2>

            <p className="text-gray-600 mb-4">
              Uma história real sobre ser mulher em um ambiente dominado por
              homens.
            </p>

            <span className="text-sm text-gray-400">
              Storytelling • Contexto social
            </span>
          </Link>

          <Link
            href="/artigos/corrida"
            className="block border p-6 rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Eu achei que era só voltar a correr. Não era.
            </h2>

            <p className="text-gray-600 mb-4">
              Uma experiência real sobre lesão, ansiedade e recuperação.
            </p>

            <span className="text-sm text-gray-400">
              Experiência pessoal • Saúde • Aprendizado
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
