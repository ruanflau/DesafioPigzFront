import Header from "./components/Header";
import Hero from "./components/Hero";
import Pigzdido from "./components/Pigzdido";
import Features from "./components/Features";
import Support from "./components/Support";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Pigzdido />
        <Features />
        <Support />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}
