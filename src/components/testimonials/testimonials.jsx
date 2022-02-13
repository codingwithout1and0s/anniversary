import "./testimonials.css";

export default function Testimonials() {
  const dummyData = [
    {
      id: "1",
      profileIMG: "test.png",
      person: "Tom Cruise",
      testimonial:
        "Those two are were dreams come true. I am so jealous. They are the reason I'm still looking for love."
    },
    {
      id: "2",
      profileIMG: "test1.png",
      person: "Johnny Galecki",
      testimonial:
        "Gosh, she looks badass in that elongated white wedding dress with the classic vintage leather jacket. Yeah and the dude looks nice too."
    },
    {
      id: "3",
      profileIMG: "test2.png",
      person: "Rob Lowe",
      testimonial:
        "I was paid to leave a testimonial. Go team um... Steve-Michelle?"
    }
  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      {dummyData.map( card => (
              <div className="card"  key={card.id} >
              <div className="layer"></div>
              <div className="content">
                  <p>
                      {card.testimonial}
                      <div className="details">
                          <h2><span>{card.person}</span></h2>
                      </div>
                  </p>
              </div>
              </div>
      ))}
    </div>
  );


}
