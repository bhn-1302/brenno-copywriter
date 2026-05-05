export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Copywriter focado em criar textos que prendem atenção e geram ação
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Especializado em landing pages, páginas de venda e conteúdo
            estratégico.
          </p>

          <a
            href="/projetos"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Ver projetos
          </a>

          <a href="/artigos" className="underline">
            Ver artigos
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Projetos selecionados</h2>

          <div className="space-y-6">
            <a
              href="/projetos/burnout"
              className="block border p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Landing page sobre burnout
              </h3>
              <p className="text-gray-600">
                Conexão emocional com pessoas esgotadas mentalmente.
              </p>
            </a>

            <a
              href="/projetos/petshop"
              className="block border p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Página para pet shop
              </h3>
              <p className="text-gray-600">
                Construção de confiança e proximidade com clientes locais.
              </p>
            </a>

            <a
              href="/projetos/pururuca"
              className="block border p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Página de vendas de pururuca
              </h3>
              <p className="text-gray-600">
                Copy focada em desejo e conversão imediata.
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
