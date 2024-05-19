import { Link } from "react-router-dom";
export default function CountryCard({
  name,
  imageUrl,
  capital,
  population,
  region,
  data,
  key,
}) {
  return (
    <Link className="country-card" to={name} state={data} key={key}>
      <img src={imageUrl} alt={name} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
