import "./infocard.css";
import LandingIMG from "../../../public/landing.jpg";

export default function Card(props) {
  const dummyData = [
    {
      id: "1",
      cardIMG: "test.png",
      cardTitle: "Best moments are",
      cardText:
        "You have secured the perfect ideal man, enjoying his embrace, and comtemplating your eternity together. Here are some of the best moments so far."
    },
    {
      id: "2",
      cardIMG: "test1.png",
      cardTitle: "The Dream",
      cardText:
        "Look at you! You did it! You found the perfect/unperfect man just for you."
    }
  ];

  return (
    <div className="CardContainer">
      <div
        className="CardIMG"
        style={{ backgroundImage: `url(${LandingIMG})` }}
      >
        <div className="TextContent">
          <h2>{dummyData[props.id].cardTitle}</h2>
          <p className="passage">{dummyData[props.id].cardText}</p>
          <button className="ReadMore">Read more</button>
        </div>
      </div>
    </div>
  );
}
