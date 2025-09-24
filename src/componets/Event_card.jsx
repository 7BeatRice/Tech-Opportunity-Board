const Event_card = ({ eventName, imageSrc, date, desc, buttonLink }) => {
  return (
    <div className="card">
      <h2>{eventName}</h2>
      <img src={imageSrc} alt={eventName} />
      <h4>{date}</h4>
      <p>{desc}</p>
        <a href={buttonLink} target="_blank" className="btn">
          <button onClick={() => window.open(buttonLink, "_blank", "noopener,noreferrer")}>More Info</button>
        </a>
    </div>
  );
}
export default Event_card;