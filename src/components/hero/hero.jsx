import "./hero.css";
import LandingIMG from "../../../public/landing.jpg"

export default function Hero() {
  return (
    <div className="HeroContainer">
      <img src={LandingIMG} alt="Hero Banner" />
    </div>
  );
}
