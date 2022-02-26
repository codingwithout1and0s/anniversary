import "./card.css";

export default function CardTest(props) {
  const dummyData = [
    {
      id: "1",
      cardIMG:
        "https://images.unsplash.com/photo-1628496893434-36e7f807af78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      cardTitle: "Meet Thang",
      cardText:
        "A simple happy go lucky kind of guy"
    },
    {
      id: "2",
      cardIMG:
        "https://images.unsplash.com/photo-1445272727255-681d14e89af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      cardTitle: "Meet Ngoc",
      cardText:
        "Really the best girl looking for a simple lovely life with a good man"
    }
  ];

  return (
    <div id="Container">
      <div className="product-details">
        <h1>{dummyData[props.id].cardTitle}</h1>
        <p className="information">" {dummyData[props.id].cardText} "</p>
      </div>

      <div className="product-image">
        <img
          src={dummyData[props.id].cardIMG}
          alt={dummyData[props.id].cardTitle}
        />
      </div>
    </div>
  );
}
