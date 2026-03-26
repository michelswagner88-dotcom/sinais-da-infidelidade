import { CTAButton } from "@/components/CTAButton";
import {
  Eye,
  MapPin,
  Brain,
  ShieldAlert,
  Wrench,
  MessageCircle,
  Scale,
  Heart,
  Moon,
  User,
  Lock,
  Check,
  X,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ─── color shortcuts (HSL from CSS vars) ─── */
const C = {
  bg950: "hsl(240,10%,3.9%)",
  bg900: "hsl(240,5.9%,10%)",
  bg800: "hsl(240,3.7%,15.9%)",
  gray: "hsl(240,3.8%,66.1%)",
  light: "hsl(240,5%,84.3%)",
  red: "hsl(0,84%,50%)",
  redDark: "hsl(0,73%,35%)",
  amber: "hsl(38,92%,50%)",
  green: "hsl(142,71%,45%)",
  greenDark: "hsl(149,61%,20%)",
};

/* ─── shared tailwind tokens ─── */
const section = "py-14 md:py-20";
const container = "max-w-[720px] mx-auto px-5 md:px-8";
const card = `bg-[${C.bg900}] border border-[${C.bg800}] rounded-xl p-5 md:p-7`;
const h2tw = "font-display text-[28px] md:text-[38px] font-bold leading-[1.20] text-white";
const bodyTw = "text-base md:text-[17px] leading-[1.7]";
const textGray = `text-[${C.gray}]`;
const textLight = `text-[${C.light}]`;

const CHECKOUT_URL = "https://pay.hotmart.com/B102228403Q";

const Index = () => {
  const [isBottomBarVisible, setIsBottomBarVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ViewContent pixel */
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: "Sinais da Infidelidade",
        content_type: "product",
        value: 27.0,
        currency: "BRL",
      });
    }
  }, []);

  /* scroll → sticky bar */
  useEffect(() => {
    const onScroll = () => setIsBottomBarVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── FAQ data ─── */
  const faqs = [
    {
      q: "É só uma lista de sinais?",
      a: "Não. São 4 guias completos. Além dos 400+ sinais, tem psicologia da infidelidade, como observar em cada cenário real (carro, viagem, celular, festas, restaurantes, academia), ferramentas práticas, roteiro de conversa com 3 scripts, como decidir ficar ou sair, como reconstruir, e como proteger sua saúde mental.",
    },
    {
      q: "Serve pra homem também?",
      a: "Sim. Tem versão com 200 sinais masculinos e outra com 200 femininos. Os guias gerais funcionam pra ambos.",
    },
    {
      q: "Meu parceiro(a) vai saber que eu comprei?",
      a: "Não. Aparece no extrato como 'HOTMART' — sem referência ao produto.",
    },
    {
      q: "Ensina a clonar WhatsApp ou espionar?",
      a: "Não. O método é baseado em observação de comportamentos visíveis. Não ensina nada ilegal.",
    },
    {
      q: "E se eu não encontrar nenhum sinal?",
      a: "Ótima notícia. O material separa ansiedade de traição real. Muita gente compra, dá verde no semáforo, e descobre que o problema era ansiedade — não o parceiro. Isso vale tanto quanto.",
    },
    {
      q: "E se eu encontrar muitos sinais?",
      a: "O kit tem Roteiro de Conversa com 3 scripts. Você sabe como ter a conversa sem acusar e sem ser manipulado(a).",
    },
    {
      q: "Substitui terapia?",
      a: "Não. É ferramenta de observação. Se identificar padrão, o material recomenda terapia. Mas te dá a base que a terapia sozinha levaria meses.",
    },
    {
      q: "Posso usar pra relacionamento passado?",
      a: "Sim. Muita gente usa pra fechar ciclos. Clareza retroativa também cura.",
    },
    {
      q: "Quanto tempo pro resultado?",
      a: "Checklist dá panorama em 15 minutos. Diário confirma ou descarta em 21 dias.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="bg-black py-16 md:py-24 text-center">
        <div className={container}>
          {/* Badge */}
          <div
            className="animate-fade-up inline-block bg-[hsl(240,5.9%,10%)] border border-[hsl(240,3.7%,15.9%)] rounded-full px-4 py-2 mb-8"
            style={{ animationDelay: "0s" }}
          >
            <span className="text-amber-500 text-xs font-semibold tracking-wide uppercase">
              4 Guias + 4 Ferramentas · 400+ Sinais · 7 Eixos
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up font-display text-[38px] md:text-[52px] font-bold leading-[1.15] text-white mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            Saia da dúvida que está te destruindo por dentro.
          </h1>

          {/* Subtítulo */}
          <div
            className={`animate-fade-up ${textGray} max-w-[560px] mx-auto ${bodyTw} mb-8 space-y-4`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>Algo mudou no seu relacionamento. Você sente. Mas não tem certeza.</p>
            <p>
              Este kit não é uma lista de sinais. É um método completo — dos sinais à conversa final — baseado em 2.400
              casos analisados por terapeutas conjugais.
            </p>
            <p>
              400+ sinais em 7 áreas da vida. Cenários reais. Ferramentas práticas. Roteiro de conversa. Versão
              masculina e feminina.
            </p>
            <p>Tudo que você precisa pra saber, com fatos, se o que sente tem base ou não.</p>
          </div>

          {/* CTA */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <CTAButton ctaPosition="hero">QUERO CLAREZA AGORA — R$27</CTAButton>
          </div>

          {/* Microcopy */}
          <p className={`${textGray} text-xs mt-4`}>
            Acesso imediato · Pagamento seguro · Garantia total de 7 dias
          </p>

          {/* Prova */}
          <p className={`${textGray} text-sm mt-6 flex items-center justify-center gap-2`}>
            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            Baseado em 2.400 casos documentados por terapeutas conjugais brasileiros (2020–2023)
          </p>

          {/* Mockup CSS */}
          <div className="mt-8 flex items-end justify-center gap-4" style={{ perspective: "400px" }}>
            <div
              className="w-[80px] md:w-[110px] h-[110px] md:h-[150px] rounded-[3px_8px_8px_3px] flex items-center justify-center shadow-[4px_4px_20px_rgba(0,0,0,0.6)]"
              style={{
                background: "linear-gradient(135deg, hsl(220,20%,18%), hsl(220,25%,12%))",
                transform: "rotateY(-8deg)",
              }}
            >
              <span className="text-white text-[10px] font-semibold text-center px-2 leading-tight">
                200 Sinais
                <br />
                Masculina
              </span>
            </div>
            <div
              className="w-[80px] md:w-[110px] h-[110px] md:h-[150px] rounded-[3px_8px_8px_3px] flex items-center justify-center shadow-[4px_4px_20px_rgba(0,0,0,0.6)]"
              style={{
                background: "linear-gradient(135deg, hsl(270,25%,25%), hsl(270,30%,18%))",
                transform: "rotateY(-8deg)",
              }}
            >
              <span className="text-white text-[10px] font-semibold text-center px-2 leading-tight">
                200 Sinais
                <br />
                Feminina
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. ESPELHO DA DOR
      ══════════════════════════════════════════ */}
      <section className={`${section}`} style={{ backgroundColor: C.bg950 }}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>Você se reconhece aqui?</h2>

          <div className="space-y-3">
            {[
              "Você checa o celular quando ele(a) vai ao banheiro?",
              "Fica repassando conversas que não fecham direito?",
              "Acordou de madrugada com aquele pensamento que não sai?",
              "Sentiu que algo mudou — mas não consegue nomear o quê?",
              "Tem medo de perguntar... e medo de não perguntar?",
              "Se pergunta se está exagerando — ou sendo ingênuo(a)?",
              "Já ensaiou uma conversa que nunca teve coragem de ter?",
              "Sente que está 'no' relacionamento, mas não está mais presente nele?",
            ].map((q, i) => (
              <div
                key={i}
                className={`border-l-2 border-amber-500 pl-4 py-2 ${textLight} ${bodyTw} animate-fade-up`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {q}
              </div>
            ))}
          </div>

          <div className={`font-display italic ${textGray} border-t border-[${C.bg800}] pt-6 mt-8 ${bodyTw} space-y-4`}>
            <p>
              87% das pessoas que relatam essa sensação estavam certas. Não é paranoia. É o seu cérebro captando sinais
              que a sua mente consciente ainda não organizou.
            </p>
            <p>Mas sem método, você fica presa no achismo. E achismo não resolve nada.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. CUSTO DA DÚVIDA
      ══════════════════════════════════════════ */}
      <section className={`bg-black ${section}`}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>A dúvida tem um preço. E você já está pagando.</h2>

          <div className="space-y-4">
            {[
              {
                icon: Moon,
                title: "Sono e saúde",
                text: "Começa no pensamento. Vai pro sono. O sono piora. A concentração cai. O trabalho sofre. A comida não desce. Você fica irritado(a) com coisas pequenas e não sabe mais se o problema é você ou a situação.",
              },
              {
                icon: User,
                title: "Identidade",
                text: "Você para de ser você mesmo(a) e vira alguém que finge normalidade 24 horas por dia. Sorri na frente dos filhos. Sorri no trabalho. E por dentro, desmorona. Cada 'tá tudo bem?' que responde é uma mentira que pesa mais que a anterior.",
              },
              {
                icon: Lock,
                title: "O limbo",
                text: "Não pode se separar — porque não tem certeza. Não pode confiar — porque os sinais estão lá. Não pode falar — porque tem medo de errar. E não pode ignorar — porque o corpo sente.\n\nEssa prisão não tem grade. Mas tem saída.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} className={card}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <h3 className="text-amber-500 font-semibold text-[20px] md:text-[24px]">{title}</h3>
                </div>
                <p className={`${textGray} ${bodyTw} whitespace-pre-line`}>{text}</p>
              </div>
            ))}
          </div>

          <p className="font-display italic text-amber-500 text-xl md:text-2xl text-center mt-8">
            Clareza dói menos que incerteza. Sempre.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. O QUE O KIT REALMENTE É
      ══════════════════════════════════════════ */}
      <section className={section} style={{ backgroundColor: C.bg950 }}>
        <div className={container}>
          <h2 className={`${h2tw} mb-4`}>
            Isso não é &lsquo;uma lista de sinais&rsquo;. É o kit mais completo que existe.
          </h2>

          <div className={`${textGray} ${bodyTw} mb-8 space-y-4`}>
            <p>
              A maioria dos materiais te dá &lsquo;10 sinais de traição&rsquo; genéricos e te deixa no ar. Você lê, se
              identifica com 3 ou 4, e fica no mesmo lugar.
            </p>
            <p>
              Este kit cobre TUDO — do primeiro sinal à conversa final. Da suspeita à decisão. Do medo à clareza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bloco 1 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">400+ sinais em 7 eixos</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· Cada sinal com explicação, nível de alerta e contexto</li>
                <li>· Falsos positivos (pra não confundir estresse com traição)</li>
                <li>· Versão masculina (200) e feminina (200)</li>
                <li>· Regra: 3+ ocasiões em 2+ eixos = padrão</li>
              </ul>
            </div>

            {/* Bloco 2 — full width */}
            <div className={`${card} md:col-span-2`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">Onde observar na vida real</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "Celular",
                  "Carro",
                  "Casa",
                  "Viagens",
                  "Restaurantes",
                  "Academia",
                  "Festas",
                  "Shopping",
                  "Praia",
                  "Condomínio",
                  "Presentes",
                  "Trabalho",
                ].map((tag) => (
                  <span
                    key={tag}
                    className={`bg-[${C.bg800}] rounded-full px-3 py-1 text-sm ${textLight}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`${textGray} text-sm`}>
                Cada cenário com &lsquo;como testar&rsquo; de forma ética. Sem invadir privacidade.
              </p>
            </div>

            {/* Bloco 3 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/15 flex items-center justify-center">
                  <Brain className={`w-5 h-5 ${textLight}`} />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">A psicologia por trás</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· 3 tipos de infidelidade: física, emocional, digital</li>
                <li>· Perfil psicológico de quem trai</li>
                <li>· Projeção de culpa: quando o traidor acusa VOCÊ</li>
                <li>· Como a traição evolui ao longo do tempo</li>
                <li>· Tabela diagnóstica com probabilidades</li>
              </ul>
            </div>

            {/* Bloco 4 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">Táticas de manipulação</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· Gaslighting: &ldquo;você está imaginando coisas&rdquo;</li>
                <li>· Inversão de culpa: ataca pra desviar o foco</li>
                <li>· Carinho compensatório: presentes do nada (é culpa)</li>
                <li>· Defensividade: explode com perguntas simples</li>
                <li>· Lei do gelo e promessas vazias</li>
              </ul>
            </div>

            {/* Bloco 5 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">Ferramentas práticas</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· Checklist de Bolso: 30 itens, resultado visual</li>
                <li>· Diário de 21 Dias: registro com intensidade</li>
                <li>· Semáforo: Verde → Amarelo → Vermelho</li>
                <li>· Roteiro de Conversa: 3 scripts prontos</li>
              </ul>
            </div>

            {/* Bloco 6 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">A conversa decisiva</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· Como preparar os fatos antes de sentar</li>
                <li>· O que falar e o que NÃO falar</li>
                <li>· Como ler a reação: cooperação vs. manipulação</li>
                <li>· Acordos práticos de transparência</li>
              </ul>
            </div>

            {/* Bloco 7 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-500/15 flex items-center justify-center">
                  <Scale className={`w-5 h-5 ${textLight}`} />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">Ficar ou sair — com fatos</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· Critérios objetivos pra decidir</li>
                <li>· Sinais de que vale reconstruir</li>
                <li>· Sinais de que NÃO vale</li>
                <li>· Reconstrução em 3 fases</li>
                <li>· Aspectos legais no Brasil</li>
              </ul>
            </div>

            {/* Bloco 8 */}
            <div className={card}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-[20px] md:text-[24px] text-white">Proteger sua saúde mental</h3>
              </div>
              <ul className={`${textLight} text-sm space-y-1.5`}>
                <li>· Sinais de que precisa pausar</li>
                <li>· Como não virar refém da desconfiança</li>
                <li>· Quando buscar terapia</li>
                <li>· Recursos de apoio</li>
              </ul>
            </div>
          </div>

          {/* CTA após blocos */}
          <div className="mt-8">
            <CTAButton ctaPosition="blocos">QUERO TUDO ISSO — R$27</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. OS 7 EIXOS
      ══════════════════════════════════════════ */}
      <section className={`bg-black ${section}`}>
        <div className={container}>
          <h2 className={`${h2tw} mb-2`}>Os 7 eixos que revelam um padrão</h2>
          <p className={`${textGray} ${bodyTw} mb-8`}>Sinal isolado não é prova. Padrão em múltiplos eixos é.</p>

          <div className="space-y-0">
            {[
              {
                n: "1",
                title: "Rotina & Logística",
                desc: "Atrasos, saídas que se estendem, compromissos que excluem você, sumiços nos mesmos dias.",
              },
              {
                n: "2",
                title: "Digital & Celular",
                desc: "Senhas novas, celular virado, apps escondidos, histórico limpo, modo avião, segundo chip.",
              },
              {
                n: "3",
                title: "Social & Redes",
                desc: "Novos amigos secretos, fotos do casal somem, comportamento de solteiro(a).",
              },
              {
                n: "4",
                title: "Afeto & Intimidade",
                desc: "Frieza, sexo que sumiu, carinho rotina, críticas novas, técnicas que não vieram de você.",
              },
              {
                n: "5",
                title: "Financeiro & Consumo",
                desc: "Gastos ocultos, dinheiro vivo, presentes que você nunca recebeu, contas secretas.",
              },
              {
                n: "6",
                title: "Casa & Carro",
                desc: "Cheiro diferente, objetos estranhos, banco alterado, banho imediato, limpeza pós-saída.",
              },
              {
                n: "7",
                title: "Narrativa & Limites",
                desc: "Histórias que mudam, agressividade, inversão de culpa, 'você tá paranóico(a)'.",
              },
            ].map(({ n, title, desc }, i) => (
              <div
                key={i}
                className={`flex gap-4 py-4 ${i < 6 ? `border-b border-[${C.bg800}]` : ""}`}
              >
                <span className="text-amber-500 font-display text-2xl min-w-[32px]">{n}</span>
                <div>
                  <p className="font-bold text-white">{title}</p>
                  <p className={`${textGray} text-sm`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`bg-[${C.bg900}] border border-amber-500/20 rounded-xl p-5 mt-6 text-center`}>
            <p className="text-amber-500 font-semibold">
              Repetiu em 3+ ocasiões e apareceu em 2+ eixos? É padrão — não acidente.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. ANTES vs DEPOIS
      ══════════════════════════════════════════ */}
      <section className={section} style={{ backgroundColor: C.bg950 }}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>A diferença é uma decisão.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sem o método */}
            <div className="bg-[hsl(0,73%,35%)]/10 border border-red-500/20 rounded-xl p-5">
              <h3 className="text-red-500 font-semibold text-[20px] mb-4">Sem o método</h3>
              <div className="space-y-3">
                {[
                  "Checa o celular escondido e se sente péssima",
                  'Pergunta "tá tudo bem?" e recebe "tá" seco',
                  "Passa a madrugada no Instagram procurando pistas",
                  'Ouve "você é paranóico(a)" e começa a acreditar',
                  "Confronta com emoção e sai como a vilã",
                  "Sofre calada e a saúde vai embora",
                  "Não sabe se fica ou sai",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <p className={`${textGray} text-sm`}>{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Com o método */}
            <div className="bg-[hsl(149,61%,20%)]/20 border border-green-500/20 rounded-xl p-5">
              <h3 className="text-green-500 font-semibold text-[20px] mb-4">Com o método</h3>
              <div className="space-y-3">
                {[
                  "Sabe exatamente o que observar e o que ignorar",
                  'Tem checklist objetivo — não depende de "feeling"',
                  "Identifica padrões reais vs. coincidências em 21 dias",
                  "Conhece as táticas de manipulação e não cai mais",
                  "Sabe conversar sem acusar e sem ser manipulada",
                  "Protege a saúde mental com limites claros",
                  "Toma decisão com base em fatos, não em medo",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <p className={`${textLight} text-sm`}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. PRA QUEM É / NÃO É
      ══════════════════════════════════════════ */}
      <section className={`bg-black ${section}`}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>Isso foi feito pra você se...</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[
                "Sente que algo mudou e quer entender se é real ou ansiedade",
                "Já foi traído(a) antes e agora fica em alerta constante",
                "Quer base sólida antes da conversa mais difícil da vida",
                "É homem e suspeita da parceira",
                "É mulher e suspeita do parceiro",
                "Quer clareza — mesmo que a resposta doa",
                "Quer parar de sofrer sozinho(a) em silêncio",
                "Quer saber como reagir se confirmar",
                "Quer saber como reconstruir se decidir ficar",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className={`${textLight} ${bodyTw}`}>{t}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mt-6 md:mt-0">
              <p className={`${textGray} font-semibold text-sm mb-2 uppercase tracking-wide`}>Não é pra você se...</p>
              {[
                "Quer espionar ou controlar alguém obsessivamente",
                "Quer clonar WhatsApp ou instalar rastreador",
                "Já tomou a decisão e só quer justificativa",
                "Busca provas pra processo judicial",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className={`${textGray} ${bodyTw}`}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. DEPOIMENTOS
      ══════════════════════════════════════════ */}
      <section className={section} style={{ backgroundColor: C.bg950 }}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>O que mudou pra quem usou</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                text: "Usei o checklist numa tarde. 14 de 30 itens batiam, em 4 eixos diferentes. Não era paranoia. O pior? Os sinais no eixo financeiro — gastos que não batiam, conta nova que eu não sabia. Usei o roteiro de conversa e ele confessou. Doeu. Mas a dúvida doía mais.",
                name: "Camila M., 34",
                city: "São Paulo, SP",
                time: "14:32",
              },
              {
                text: "Homem não fala sobre isso. Mas eu estava destruído. O diário de 21 dias mostrou o padrão: toda quarta e todo sábado, os mesmos sumiços. Quando cruzei com o eixo do celular e o financeiro, ficou claro.",
                name: "Roberto A., 38",
                city: "Salvador, BA",
                time: "23:48",
              },
              {
                text: "Comprei esperando encontrar muita coisa. Não encontrei quase nada. O semáforo deu verde em 6 dos 7 eixos. Percebi que o que tinha mudado era minha ansiedade — não o meu marido. Esse kit me salvou de destruir um casamento saudável.",
                name: "Fernanda R., 41",
                city: "Belo Horizonte, MG",
                time: "09:17",
              },
              {
                text: "O que mais me ajudou foi a parte de manipulação. Eu não sabia o que era gaslighting até ler o guia. Quando vi que 'você tá imaginando coisas' era tática, não verdade, tudo fez sentido.",
                name: "Juliana T., 29",
                city: "Curitiba, PR",
                time: "16:05",
              },
            ].map(({ text, name, city, time }, i) => (
              <div key={i} className={`bg-[${C.bg900}] rounded-xl p-5`}>
                <p className={`font-display italic ${textLight} text-[15px] leading-relaxed mb-4`}>{text}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">{name}</p>
                    <p className={`${textGray} text-sm`}>{city}</p>
                  </div>
                  <span className="text-xs text-blue-400">
                    {time} ✓✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. SOLUÇÕES QUE FALHAM
      ══════════════════════════════════════════ */}
      <section className={`bg-black ${section}`}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>Você provavelmente já tentou alguma dessas.</h2>

          <div className="space-y-3">
            {[
              {
                title: "Confrontar sem ter certeza",
                desc: "Quem trai já tem respostas prontas. Você sai como 'paranóico(a)'. Pior: a pessoa aprende a esconder melhor.",
              },
              {
                title: "Mexer no celular escondido",
                desc: "Ilegal. Se achar algo, a pessoa vira a vítima. Se não achar, a ansiedade piora. Nos dois casos, você perde.",
              },
              {
                title: "Sofrer em silêncio",
                desc: "A dúvida corrói. Sono vai. Trabalho piora. Corpo adoece. Cada dia é mais desgaste. A dúvida não resolve sozinha.",
              },
              {
                title: "Pedir conselho pra amigos",
                desc: "Cada um fala uma coisa. Ninguém tem método. Vira fofoca. Mais confusa do que antes.",
              },
              {
                title: "Contratar detetive",
                desc: "R$2.000 a R$5.000. Sem garantia. E você não tem ferramenta pra lidar com o que vem depois.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className={card}>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold mb-1">{title}</p>
                    <p className={`${textGray} text-sm`}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAButton ctaPosition="solucoes">QUERO O MÉTODO QUE FUNCIONA — R$27</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. COMPARAÇÃO
      ══════════════════════════════════════════ */}
      <section className={section} style={{ backgroundColor: C.bg950 }}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8 text-center`}>Compare antes de decidir.</h2>

          <div className={`bg-[${C.bg900}] rounded-xl max-w-[480px] mx-auto overflow-hidden`}>
            {[
              { label: "Terapia de casal", price: "R$200–500/sessão", highlight: false },
              { label: "Detetive particular", price: "R$2.000–5.000", highlight: false },
              { label: "Advogado", price: "R$3.000+", highlight: false },
              { label: "Meses de dúvida", price: "Sua saúde mental", highlight: false },
              { label: "Kit completo", price: "R$27", highlight: true },
            ].map(({ label, price, highlight }, i) => (
              <div
                key={i}
                className={`flex justify-between py-3 px-5 border-b border-[${C.bg800}] text-sm ${
                  highlight ? "bg-amber-500/10 text-amber-500 font-bold" : ""
                }`}
              >
                <span className={highlight ? "" : textGray}>{label}</span>
                <span className={highlight ? "" : "text-white"}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11. OFERTA
      ══════════════════════════════════════════ */}
      <section className={`bg-black ${section}`}>
        <div className={container}>
          <div className="max-w-[480px] mx-auto bg-[hsl(240,5.9%,10%)] border-2 border-amber-500/40 rounded-2xl p-6 md:p-8 text-center relative shadow-[0_0_40px_rgba(245,158,11,0.12)]">
            {/* Badge flutuante */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
              ACESSO IMEDIATO
            </div>

            <p className={`${textGray} text-sm mb-4 mt-2`}>O kit completo:</p>

            <div className={`text-left ${textLight} text-sm space-y-2 mb-5`}>
              <p>📘 Guia Completo — 400+ sinais, psicologia, perfil do traidor, reconstrução</p>
              <p>📘 Métodos Práticos — cenários reais, como testar, erros comuns, acordos</p>
              <p>📘 200 Sinais — Versão Masculina</p>
              <p>📘 200 Sinais — Versão Feminina</p>
              <p>✅ Checklist de Bolso</p>
              <p>✅ Diário de 21 Dias</p>
              <p>✅ Semáforo de Tendências</p>
              <p>✅ Roteiro de Conversa (3 scripts)</p>
            </div>

            <div className={`border-t border-[${C.bg800}] my-5`} />

            <p className={`${textGray} text-lg line-through`}>De R$147</p>
            <p className="text-white font-display text-[48px] md:text-[58px] font-bold leading-none my-2">R$27</p>
            <p className={`${textGray} text-sm mb-5`}>pagamento único · acesso imediato</p>

            <CTAButton ctaPosition="oferta">QUERO CLAREZA AGORA — R$27</CTAButton>

            <p className={`${textGray} text-xs mt-4`}>
              Pagamento seguro via Hotmart · Pix, cartão até 6x ou boleto · Entrega discreta
            </p>
            <p className={`${textGray} text-xs mt-2`}>
              7 dias pra ler, usar e decidir. Se não valer, devolvemos tudo.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12. GARANTIA
      ══════════════════════════════════════════ */}
      <section className={section} style={{ backgroundColor: C.bg950 }}>
        <div className={`${container} text-center max-w-[640px]`}>
          <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 text-green-500 mx-auto mb-4" />

          <h2 className={`${h2tw} mb-6`}>O risco é zero. Todo nosso.</h2>

          <div className={`${textGray} ${bodyTw} space-y-4`}>
            <p>Leia os 4 guias. Use o checklist. Preencha o diário. Teste o semáforo. Use o roteiro.</p>
            <p>
              Se em 7 dias você não sentir que tem mais clareza do que em meses de sofrimento e noites em claro — manda
              um e-mail e devolvemos cada centavo. Sem perguntas. Sem burocracia.
            </p>
            <p>A Hotmart processa o reembolso em até 48 horas.</p>
            <p>Você não tem nada a perder. Exceto a dúvida.</p>
          </div>

          <div className="inline-block mt-4 bg-[hsl(149,61%,20%)]/30 border border-green-500/30 rounded-full px-4 py-2">
            <span className="text-green-500 text-sm font-semibold">Garantia total de 7 dias</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13. FAQ
      ══════════════════════════════════════════ */}
      <section className={`bg-black ${section}`}>
        <div className={container}>
          <h2 className={`${h2tw} mb-8`}>Perguntas que todo mundo faz</h2>

          <div>
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-[${C.bg800}]`}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4 min-h-[48px] gap-4"
                >
                  <span className="text-white font-semibold text-[15px]">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 ${textGray} flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaq === index ? "max-h-[500px] pb-4" : "max-h-0"
                  }`}
                >
                  <p className={`${textGray} text-[15px] leading-relaxed`}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAButton ctaPosition="faq">QUERO CLAREZA AGORA — R$27</CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          14. CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.bg950 }}>
        <div className={`${container} text-center max-w-[640px]`}>
          <h2 className={`${h2tw} mb-6`}>Quantas noites mais?</h2>

          <div className={`${textGray} ${bodyTw} space-y-4 mb-8`}>
            <p>
              Você pode fechar essa página e voltar pro mesmo lugar. A mesma insônia. A mesma ansiedade. O mesmo
              &lsquo;será que...?&rsquo; sem resposta.
            </p>
            <p>
              Ou pode ter nas mãos, dentro de 5 minutos, o método mais completo que existe pra saber se o que você sente
              tem base — ou se é hora de respirar aliviado(a).
            </p>
            <p>
              400+ sinais. 7 eixos. Cenários reais. Ferramentas. Roteiro. Psicologia. Reconstrução. Proteção.
            </p>
            <p>Tudo por menos do que um jantar. R$27. E se não valer, devolve.</p>
          </div>

          <CTAButton ctaPosition="final">QUERO SABER A VERDADE — R$27</CTAButton>

          <p className={`${textGray} text-xs mt-4`}>
            Acesso imediato · Pagamento seguro · 7 dias de garantia · Hotmart
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          15. FOOTER
      ══════════════════════════════════════════ */}
      <footer className={`bg-black py-10 border-t border-[${C.bg800}]`}>
        <div className={`${container} text-center space-y-3`}>
          <p className="text-xs text-gray-500/50">
            Este material destina-se a autoconhecimento e observação pessoal. Não substitui acompanhamento psicológico ou
            jurídico profissional.
          </p>
          <p className="text-xs text-gray-500/30">
            © 2026 Sinais da Infidelidade. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ══════════════════════════════════════════
          STICKY BAR (mobile only)
      ══════════════════════════════════════════ */}
      {isBottomBarVisible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-[hsl(240,3.7%,15.9%)] py-3 px-5 flex items-center justify-between gap-3 animate-fade-up"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <div>
            <p className="text-amber-500 font-bold text-lg leading-tight">R$27</p>
            <p className={`${textGray} text-xs`}>Garantia 7 dias</p>
          </div>
          <button
            onClick={() => {
              if (typeof window.fbq === "function") {
                window.fbq("track", "InitiateCheckout", {
                  content_name: "Sinais da Infidelidade",
                  content_category: "sticky",
                  value: 27.0,
                  currency: "BRL",
                });
              }
              window.location.href = CHECKOUT_URL;
            }}
            className="bg-amber-500 text-black font-bold rounded-lg py-3 px-5 text-sm min-h-[48px] cursor-pointer"
          >
            QUERO CLAREZA
          </button>
        </div>
      )}

      {/* Espaçador para sticky bar */}
      <div className="h-[72px] md:h-0" />
    </div>
  );
};

export default Index;
