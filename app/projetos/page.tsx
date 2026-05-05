export default function Projetos() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projetos</h1>

      <ul className="space-y-4">
        <li>
          <a href="/projetos/burnout" className="underline">
            Landing page sobre burnout
          </a>
        </li>

        <li>
          <a href="/projetos/petshop" className="underline">
            Página para pet shop
          </a>
        </li>

        <li>
          <a href="/projetos/pururuca" className="underline">
            Página de vendas de pururuca
          </a>
        </li>
      </ul>
    </main>
  );
}
