import iconMarketplace from "../assets/storefront_black_24dp.svg";
import iconCelular from "../assets/smartphone_black_24dp.svg";
import iconGestao from "../assets/Grupo 3545.svg";
import iconImpressao from "../assets/print_black_24dp.svg";
import "./Pigzdido.css";

const ITEMS = [
  {
    icon: iconMarketplace,
    tint: true,
    title: "Marketplace",
    text: "Pra sua loja vender mais",
  },
  {
    icon: iconCelular,
    tint: true,
    title: "É fácil e rápido",
    text: "Fazer um pedido no Pigz",
  },
  {
    icon: iconGestao,
    tint: false,
    title: "Pigz Gestão",
    text: "Você no controle, sempre",
  },
  {
    icon: iconImpressao,
    tint: true,
    title: "Vias de impressão",
    text: "Personalizáveis",
  },
];

export default function Pigzdido() {
  return (
    <section className="pigzdido">
      <h2 className="section-title">Você tem um novo Pigzdido!</h2>
      <ul className="pigzdido__list">
        {ITEMS.map((i) => (
          <li key={i.title} className="pigzdido__card">
            <img
              src={i.icon}
              alt=""
              width={48}
              height={48}
              className={
                i.tint
                  ? "pigzdido__icon pigzdido__icon--tint"
                  : "pigzdido__icon"
              }
            />
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
