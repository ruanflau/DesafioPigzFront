import { useState } from "react";
import burguer_2 from "../assets/burguer_2.png";
import logoGrande from "../assets/Grupo 3535.svg";
import { Field, PhoneField, SelectField } from "./Field";
import "./Hero.css";

// Ordem do fluxo: contato -> endereço -> loja
const STEPS = ["contato", "endereco", "loja"];

export default function Hero() {
  const [step, setStep] = useState(0);

  const next = (e) => {
    e.preventDefault();
    if (step < STEPS.length - 1) setStep(step + 1);
    else alert("Cadastro concluído!"); // trocar pela chamada de API depois
  };

  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__copy">
          <h1>Pigz: tudo que você precisa pra vender ainda mais!</h1>
          <p>
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja pronta para iniciar as vendas.
          </p>
        </div>
        <img src={burguer_2} alt="" className="hero__burger" width={110} />
      </div>

      <form className="card-form" onSubmit={next}>
        {STEPS[step] === "contato" && (
          <>
            <h2>Quero vender no Pigz</h2>
            <p className="card-form__sub">
              Dê o primeiro passo para aumentar suas vendas
            </p>
            <Field label="Nome" placeholder="Leonercio Goesfeeld" />
            <Field
              label="E-mail"
              type="email"
              placeholder="leonercio.goesfeeld@email.com"
            />
            <PhoneField label="Telefone" placeholder="(95) 99876-5432" />
            <p className="card-form__legal">
              Ao continuar, aceito que a Pigz entre em contato comigo por
              telefone, e-mail ou WhatsApp.
            </p>
            <button className="btn" type="submit">
              Continuar
            </button>
          </>
        )}

        {STEPS[step] === "endereco" && (
          <>
            <h2>Onde fica a sua loja?</h2>
            <Field label="CEP" placeholder="00000-00" />
            <div className="row">
              <SelectField label="Estado" placeholder="UF" />
              <SelectField label="Cidade" placeholder="Selecione" />
            </div>
            <Field label="Endereço" placeholder="Avenida Brasil" />
            <div className="row">
              <Field label="Número" placeholder="123" />
              <Field label="Complemento" placeholder="Sala 1" />
            </div>
            <button className="btn" type="submit">
              Próximo
            </button>
          </>
        )}

        {STEPS[step] === "loja" && (
          <>
            <h2>Me conta um pouco sobre a sua loja</h2>
            <Field
              label="Nome da loja"
              placeholder="Restaurante Todo Mundo Gosta"
            />
            <Field label="CNPJ da loja" placeholder="12.345.678/0001-99" />
            <SelectField label="Tipo de loja" placeholder="Selecione" />
            <button className="btn btn--spaced" type="submit">
              Concluir
            </button>
          </>
        )}
      </form>

      <div className="hero__logo">
        <img src={logoGrande} alt="Pigz" width={160} />
      </div>
    </section>
  );
}
