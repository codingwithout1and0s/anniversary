import "./maincontent.css";
import Header from "../header/header";
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
      <Card id={0} />
      <p className="imgCredit">Photo by Unslpash</p>
      <Compliment />
      <Card id={1} />
      <Signature />
      <Testimonials />
      <Slider />
      <Footer />
    </div>
  );
}
