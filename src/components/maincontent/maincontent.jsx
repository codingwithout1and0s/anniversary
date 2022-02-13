import "./maincontent.css";
import Header from "../header/header";
import Hero from "../hero/hero";
import Card from "../infocard/infocard";
import Compliment from "../compliment/compliment";
import Signature from "../signature/signature";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";
import Slider from '../Slider/Slider';

export default function MainContent() {
  return (
    <div className="MainContainer">
      <Header />
      <Hero />
      <h1>Meet Steve</h1>
      <Card id={0} />
      <p className="imgCredit">Photo by Unslpash</p>
      <Compliment />
      <h1>Meet Michelle</h1>
      <Card id={1} />
      <Signature />
      <Testimonials />
      <Slider />
      <Footer />
    </div>
  );
}
