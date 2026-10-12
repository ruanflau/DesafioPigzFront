import { useEffect, useState } from "react";
import slideImg from "../assets/Grupo de máscara 2417.png";
import slideImg2x from "../assets/Grupo de máscara 2417@2x.png";
import slideImg3x from "../assets/Grupo de máscara 2417@3x.png";
import "./Features.css";

const AUTOPLAY_MS = 5000;
const FADE_MS = 500;

// Mesma imagem em todos os slides por enquanto; troque o campo `image` quando tiver as outras
const IMAGE = {
  src: slideImg,
  srcSet: `${slideImg} 1x, ${slideImg2x} 2x, ${slideImg3x} 3x`,
};

const SLIDES = [
  {
    title: "Pigz Marketplace",
    text: "Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.",
    image: IMAGE,
  },
  {
    title: "Pigz Gestão",
    text: "Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.",
    image: IMAGE,
  },
  {
    title: "Gestão de entregadores",
    text: "A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.",
    image: IMAGE,
  },
  {
    title: "Pagamento on-line",
    text: "Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.",
    image: IMAGE,
  },
];

export default function Features() {
  // active: aba selecionada (barra de progresso e autoplay)
  // shown: slide que está visível (muda só depois do fade out)
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const slide = SLIDES[shown];

  // Avança a cada 5s. Como depende de `active`, o tempo reinicia quando a pessoa clica numa aba.
  useEffect(() => {
    const id = setTimeout(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active]);

  // Fade out -> troca o conteúdo -> fade in
  useEffect(() => {
    if (active === shown) return;
    setFading(true);
    const id = setTimeout(() => {
      setShown(active);
      setFading(false);
    }, FADE_MS);
    return () => clearTimeout(id);
  }, [active, shown]);

  return (
    <section className="features">
      <h2 className="section-title">
        Tudo que você precisa por apenas R$199/mês
      </h2>
      <p className="features__lead">
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </p>

      <div className="tabs" role="tablist">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            role="tab"
            aria-selected={i === active}
            aria-label={s.title}
            className={`tabs__bar ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span
              className="tabs__fill"
              style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
            />
          </button>
        ))}
      </div>

      <div
        className={`features__content ${fading ? "is-fading" : ""}`}
        style={{ transitionDuration: `${FADE_MS}ms` }}
        aria-live="polite"
      >
        <h3 className="features__name">{slide.title}</h3>

        <article className="slide">
          <p>{slide.text}</p>
          <img
            className="slide__img"
            src={slide.image.src}
            srcSet={slide.image.srcSet}
            alt=""
          />
        </article>
      </div>
    </section>
  );
}
