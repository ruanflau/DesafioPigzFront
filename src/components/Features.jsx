import { useState } from 'react'
import Placeholder from './Placeholder'
import './Features.css'

const SLIDES = [
  {
    title: 'Pigz Marketplace',
    text: 'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.',
    image: 'slide-marketplace',
  },
  {
    title: 'Pigz Gestão',
    text: 'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.',
    image: 'slide-gestao',
  },
  {
    title: 'Gestão de entregadores',
    text: 'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.',
    image: 'slide-entregadores',
  },
  {
    title: 'Pagamento on-line',
    text: 'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.',
    image: 'slide-pagamento',
  },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]

  return (
    <section className="features">
      <h2 className="section-title">Tudo que você precisa por apenas R$199/mês</h2>
      <p className="features__lead">
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.
      </p>

      <div className="tabs" role="tablist">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            role="tab"
            aria-selected={i === active}
            aria-label={s.title}
            className={`tabs__bar ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <h3 className="features__name">{slide.title}</h3>

      <article className="slide">
        <p>{slide.text}</p>
        {/* slide-*.svg */}
        <Placeholder label={slide.image} height={170} className="slide__img" />
      </article>
    </section>
  )
}
