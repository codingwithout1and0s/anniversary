import "./closer.css";
import LandingIMG from "../../../public/landing.jpg";

export default function Closer() {
  return (
    <div
      className="CloserContainer"
      style={{
        backgroundImage: `url(${LandingIMG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <p className="message">
        A vintage romance collecting passion and extersential being is really
        love at first sight in a world full of gloom. The wild landscapes of
        these two are perfect example of affection of their engagment.
      </p>
    </div>
  );
}
