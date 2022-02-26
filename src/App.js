import "./styles.css";

import Header from "./components/header/header";
import Compliment from "./components/compliment/compliment";
import Signature from "./components/signature/signature";
import Testimonials from "./components/testimonials/testimonials";
import Closer from "./components/closer/closer";
import Footer from "./components/footer/footer";
import Card from "./components/card/card";
import Slider from "./components/slider/slider";
import Hero from "./components/hero/hero";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card id={0} />
      <Compliment />
      <Card id={1} />
      <Signature />
      <Testimonials />
      <Slider />
      <Closer />
      <Footer />
    </div>
  );
}
