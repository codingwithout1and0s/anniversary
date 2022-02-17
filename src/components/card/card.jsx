import "./card.css";

export default function CardTest(props) {
  const dummyData = [
    {
      id: "1",
      cardIMG:
        "https://images.unsplash.com/photo-1570366404839-173099e1d372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5oYSUyMHRyYW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      cardTitle: "Meet Steve",
      cardText:
        "You have secured the perfect ideal man, enjoying his embrace, and comtemplating your eternity together."
    },
    {
      id: "2",
      cardIMG:
        "https://images.unsplash.com/photo-1445272727255-681d14e89af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      cardTitle: "Meet Michelle",
      cardText:
        "Look at you! You did it! You found the perfect/unperfect man just for you."
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
