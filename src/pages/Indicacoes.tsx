const produtos = [
  {
    id: "898134",
    nome: "Fórmula Da Aprovação — Polícia Penal do Pará",
    descricao:
      "Curso focado nas provas da Polícia Penal do Pará. Material completo com simulados, estratégias de estudo e revisões objetivas para você gabaritar.",
    img: "https://static-media.hotmart.com/Jj_t6dv7AzgO9i7Qp1JM2e3jt4g=/295x165/smart/filters:quality(100)/hotmart/product_pictures/2e551830-63f4-4069-ab5b-a96c12c83ec3/ppp.png",
    link: "https://go.hotmart.com/X104978822F",
  },
  {
    id: "1052536",
    nome: "Jiu Jitsu x Krav Maga Para Rua",
    descricao:
      "Aprenda as técnicas mais eficazes de defesa pessoal unindo o Jiu Jitsu e o Krav Maga. Método prático voltado para situações reais de rua.",
    img: "https://static-media.hotmart.com/krtJLKGtgByJXPifpMz9F3r_ZqU=/295x165/smart/filters:quality(100)/hotmart/product_pictures/53854f3b-fa35-4092-b751-294f688cba43/WhatsAppImage20210406at102615.jpeg",
    link: "https://go.hotmart.com/A105031416R",
  },
  {
    id: "4923350",
    nome: "Taping Completo",
    descricao:
      "Curso completo de bandagem elástica funcional (taping) para fisioterapeutas, educadores físicos e atletas. Do básico às aplicações avançadas.",
    img: "https://static-media.hotmart.com/YaCFtf3RAUHaCviD7kv9ghUB6Wo=/295x165/smart/filters:quality(100)/hotmart/product_pictures/1a7ce6e8-c156-408b-af15-ef6d11e24db4/Semtitulo.png",
    link: "https://go.hotmart.com/C105031446M",
  },
  {
    id: "1451580",
    nome: "Combo — 3 Cursos com Lucas Mota",
    descricao:
      "Pacote especial com três cursos completos de saxofone do professor Lucas Mota. Do zero ao avançado, com suporte e atualizações inclusas.",
    img: "https://static-media.hotmart.com/3I64M-NT7VVZAM_XUYECKmyzV_E=/295x165/smart/filters:quality(100)/hotmart/product_pictures/6d5775cd-80ba-4103-8a8c-9cc75cd78673/SAXDZ1.png",
    link: "https://go.hotmart.com/I104985196D",
  },
  {
    id: "461288",
    nome: "MRO — Método Orgânico Passo a Passo",
    descricao:
      "Aprenda a gerar vendas todos os dias sem gastar em anúncios. Estratégia de tráfego orgânico estruturada em etapas claras e replicáveis.",
    img: "https://static-media.hotmart.com/AxRENKlRO-htJ7narXVgw_WJn2I=/295x165/smart/filters:quality(100)/hotmart/product_pictures/27ea6764-136a-490f-aec0-4235ac751d8f/1.png",
    link: "https://go.hotmart.com/H104978717B",
  },
  {
    id: "1871422",
    nome: "101 Receitas Low Carb",
    descricao:
      "Ebook com 101 receitas saborosas e práticas para quem segue dieta low carb. Café da manhã, almoço, jantar e sobremesas sem complicação.",
    img: "https://static-media.hotmart.com/4e4dZisAKV6dEKLdyvC-3SW9mFY=/295x165/smart/filters:quality(100)/hotmart/product_pictures/0da89fb3-a2a9-4613-8c6a-b2323d3c72e0/ebook_thumb_hotmart_V01.png",
    link: "https://go.hotmart.com/H104978869U",
  },
  {
    id: "3146235",
    nome: "30 Receitas Proteicas com até 350 kcal",
    descricao:
      "30 receitas ricas em proteína e com no máximo 350 calorias cada. Perfeitas para quem quer ganhar massa muscular sem furar a dieta.",
    img: "https://static-media.hotmart.com/OIAIO-DsA6uMk_34ca-qeakLnjg=/295x165/smart/filters:quality(100)/hotmart/product_pictures/11ba4842-806a-4545-9cde-8be5c9e4b25a/Designsemnome4.png",
    link: "https://go.hotmart.com/I105031375S",
  },
];

const Indicacoes = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-primary py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          Cursos Recomendados
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
          Selecionei os melhores cursos para você. Clique e garanta o seu com
          desconto especial.
        </p>
      </div>

      {/* Grid de produtos */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="font-bold text-base mb-2 leading-snug">{p.nome}</h2>
              <p className="text-muted-foreground text-sm flex-1 mb-4">{p.descricao}</p>
              <span className="inline-block text-center bg-primary text-primary-foreground font-semibold text-sm px-4 py-2 rounded-lg group-hover:bg-primary/90 transition-colors">
                Quero este curso →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center text-muted-foreground text-xs pb-8 px-4">
        Esta página contém links de afiliado. Ao comprar, posso receber uma
        comissão sem custo adicional para você.
      </div>
    </div>
  );
};

export default Indicacoes;
