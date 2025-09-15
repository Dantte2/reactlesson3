function Entry(props) {
  const { img, country, googleMapsUrl, title, dates, description } = props.entry;

  return (
    <div className="card">
      <img src={img.src} alt={img.alt} className="card--image" />

      <div className="card--info">
        <div className="card--location">
          <span className="card--pin">📍</span>
          <span className="card--country">{country}</span>
          <a href={googleMapsUrl} className="card--map" target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <h1 className="card--title">{title}</h1>
        <p className="card--dates">{dates}</p>
        <p className="card--description">{description}</p>
      </div>
    </div>
  );
}

export default Entry;
