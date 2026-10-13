# Pigz - Landing page "Quero vender no Pigz"

Desafio de front-end: landing page mobile do Pigz para clientes que querem vender na plataforma, criada a partir do layout do Adobe XD enviado pelo time de UI.

O foco é a versão **mobile**. No desktop, a página aparece dentro de uma moldura de celular (proporção 9:16) com rolagem interna.

## Tecnologias

- [React](https://react.dev/) 18
- [Vite](https://vite.dev/)
- CSS puro (um arquivo por componente, mais tokens globais)
- Fonte [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
git clone https://github.com/ruanflau/DesafioPigzFront.git
cd DesafioPigzFront
npm install
npm run dev
```

O Vite mostra o endereço no terminal (normalmente `http://localhost:5173`). Para ver como no celular, abra o DevTools (F12) e ative o modo de dispositivo.

## O que foi implementado

- **Header** fixo no topo, com logo e botão "Já sou parceiro".
- **Hero** com título, texto e formulário de cadastro em 3 passos:
  1. Contato (nome, e-mail e telefone)
  2. Endereço da loja (CEP, estado, cidade, endereço, número e complemento)
  3. Dados da loja (nome, CNPJ e tipo de loja)
- **"Você tem um novo Pigzdido!"**: cards com os benefícios.
- **Funcionalidades** ("Tudo que você precisa por apenas R$199/mês"): carrossel com troca automática a cada 5 segundos, barra de progresso por aba, troca manual ao tocar na aba e transição com fade.
- **Suporte** e **planos** (Pigz e Pagamento On-line), com o contato via WhatsApp.
- **Footer** com links, selos das lojas de aplicativo (App Store e Google Play), redes sociais e informações legais.

## Estrutura

```
src/
├── assets/          # imagens e SVGs do design
├── components/      # um componente por seção (.jsx + .css)
│   ├── Header
│   ├── Hero
│   ├── Field        # campos reutilizáveis do formulário
│   ├── Pigzdido
│   ├── Features
│   ├── Support
│   ├── Plans
│   └── Footer
├── styles/
│   └── global.css   # cores, tipografia, botões e moldura desktop
├── App.jsx
└── main.jsx
```

As cores, os raios de borda e a fonte ficam como variáveis CSS no `:root` do `global.css`, então ajustar o tema é mexer em um só lugar.

## Decisões

- **Mobile-first**: os estilos base são os do celular, e a moldura 9:16 só entra a partir de 768px de largura.
- **Acessibilidade**: campos com `label` associado, abas com `role="tab"` e `aria-selected`, e quem ativa "reduzir movimento" no sistema vê o carrossel sem animações.
- **Commits semânticos**: o histórico segue o padrão `tipo(escopo): descrição` (`feat`, `style`, `fix`, `chore`, `docs`), com commits pequenos por componente.

## Uso de IA no desenvolvimento

Usei o Claude como apoio durante o desafio, principalmente para cobrir lacunas nas competências exigidas e acelerar o aprendizado.

**Onde o Claude ajudou**

- **Tirar dúvidas:** como estruturar um projeto React com Vite, como importar assets (`import` de SVG e PNG), como funcionam `useState` e `useEffect`, e como organizar os componentes e o CSS.
- **Corrigir erros:** caminhos de import errados (`../assets/`), arquivo `vite.config.js` sem exportar a configuração e JSX com trechos soltos.
- **Ajustes de layout:** posição e tamanho do hambúrguer no hero, moldura 9:16 no desktop, tamanhos de texto e paleta de cores a partir das amostras do XD.
- **Comportamentos:** carrossel com troca automática a cada 5 segundos, barra de progresso e transição em fade.
- **Git:** modelo para commits semânticos e granulares, `commit --amend` para corrigir uma mensagem e `pull --rebase` para resolver um push recusado.
- **Documentação:** rascunho deste README.

**Como usei**

- O Claude me explicou o código passo a passo, como uma receita de bolo, e apontou a causa de cada erro conforme eu seguia. Ele também forneceu trechos e arquivos completos, que eu li, adaptei e apliquei no projeto.
- As decisões de escopo, os assets, os textos finais e os commits foram meus, e todo o código foi testado localmente antes de ser enviado.

## Limitações e próximos passos

- O formulário ainda não envia dados: não há integração com API (fora do escopo do desafio) nem validação dos campos.
- Os campos Estado, Cidade e Tipo de loja ainda não têm opções.
- Os quatro slides do carrossel usam a mesma imagem, por falta dos demais assets.
- Algumas cores foram tiradas das amostras da paleta do XD, e não dos códigos exatos, porque o código lido indicava uma cor diferente quando aplicado. Pode haver pequenas diferenças em relação ao layout.
