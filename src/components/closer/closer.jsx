import "./closer.css";

export default function Closer() {
  const bgImg =
    "https://images.unsplash.com/photo-1585926449367-64689895b3fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGElMjBuYW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <div
      className="CloserContainer"
      style={{
        backgroundImage: `url(${bgImg})`
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
