export default function Pururuca() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Página de vendas de pururuca
      </h1>

      <p className="text-gray-500 mb-4">
        Projeto autoral desenvolvido para prática de copywriting.
      </p>

      <a
        href="https://pururucas-sabores-do-vale.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-6 text-blue-600 underline"
      >
        Ver página completa
      </a>

      <h2 className="text-xl font-semibold mt-8 mb-2">Objetivo</h2>
      <p>
        Criar uma página simples para apresentar um produto alimentício e
        incentivar o contato.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Abordagem</h2>
      <p>
        Comunicação direta com foco na apresentação do produto e suas
        características.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Estrutura</h2>
      <ul className="list-disc ml-6">
        <li>Apresentação do produto</li>
        <li>Descrição simples</li>
        <li>Chamada para contato</li>
      </ul>
    </main>
  );
}
