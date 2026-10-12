import iconWhatsapp from "../assets/Icon awesome-whatsapp.svg";
import "./Plans.css";

const PLANS = [
  {
    title: "Pigz",
    subtitle: "Tudo que você precisa",
    items: [
      "Pigz Marketplace",
      "Página exclusiva",
      "Pigz Gestão Desktop e Mobile",
      "Gestão de entregadores",
      "Vias de impressão personalizáveis",
    ],
    price: "R$199/mês",
    cta: "Vender no Pigz agora",
  },
  {
    title: "Pagamento On-line",
    subtitle: "Segurança e agilidade",
    items: [
      "Aceite Pix e Cartão de Crédito",
      "Antecipação Pix automática",
      "Não dependa de maquininha de cartão",
      "Segurança para receber pedidos",
      "Agilidade para entregar",
    ],
    price: "2,99% por transação",
    cta: "Saiba mais",
  },
];

export default function Plans() {
  return (
    <section className="plans">
      {PLANS.map((p) => (
        <article key={p.title} className="plan">
          <h3>{p.title}</h3>
          <p className="plan__sub">{p.subtitle}</p>
          <ul>
            {p.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <span className="plan__price">{p.price}</span>
          <a href="#" className="btn">
            {p.cta}
          </a>
        </article>
      ))}

      <p className="plans__contact">
        Fale com a Pigz
        <a
          href="https://wa.me/559532242603"
          className="plans__whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconWhatsapp} alt="" width={18} height={18} />
          95 3224-2603
        </a>
      </p>
    </section>
  );
}
