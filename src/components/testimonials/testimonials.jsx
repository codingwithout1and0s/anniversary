<<<<<<< HEAD
import "./testimonials.css";

export default function Testimonials() {
  const dummyData = [
    {
      id: "1",
      profileIMG:
        "https://tse3.mm.bing.net/th/id/OIP.qWdGX4zl1J9BkoHaRRL95AAAAA?pid=ImgDet&rs=1",
      person: "Tom Cruise",
      testimonial:
        "Those two are a dream come true. I am so jealous. They're the reason I'm still looking for love."
    },
    {
      id: "2",
      profileIMG:
        "https://tse1.mm.bing.net/th/id/OIP.BINR8Y51OEAMYqvWQVecBgAAAA?pid=ImgDet&rs=1",
      person: "Ed Sheeran",
      testimonial:
        "Gosh, she looks badass in that elongated white wedding dress with the classic vintage leather jacket. Yeah and the dude looks nice too..."
    },
    {
      id: "3",
      profileIMG:
        "https://th.bing.com/th/id/R.68d55aa4711164caeaf6a7e6719b87ae?rik=%2bWTh1%2bwnZXecpQ&pid=ImgRaw&r=0",
      person: "Rob Lowe",
      testimonial:
        "I was paid to leave a testimonial. Go team um... Steve-Michelle?"
    }
  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      {dummyData.map((card) => (
        <div className="card" key={card.id}>
          <div className="layer"></div>
          <div className="content">
            <img className="image" src={card.profileIMG} alt={card.person} />
            <p>
              {card.testimonial}
              <div className="details">
                <h2>
                  <span>{card.person}</span>
                </h2>
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
=======
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
    <div className="TestimonialsContainer">
      <h1>Testimonials</h1>
      {dummyData.map((dummy) => (
        <div className="testBox" key={dummy.id}>
          <h3>{dummy.person}</h3>
          <p>{dummy.testimonial}</p>
        </div>
      ))}
    </div>
  );
}
>>>>>>> 4b6d864ce6bef9f42cc46a372f632b07bfdf0b70
