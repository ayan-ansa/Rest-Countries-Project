import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { useTheme } from "../hooks/useTheme";
import { BASE_URL } from "./CountriesList";
import "./CountryDetail.css";

export default function CountryDetail() {
  const [data, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  let countryName = params.country;
  const { state } = useLocation();

  function updateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].official,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld.join(", "),
      currencies: Object.values(data.currencies)[0].name,
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });
    if (!data.borders) {
      return;
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`${BASE_URL}/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      ); //nested data fetching
    });
  }
  const [isDark] = useTheme();
  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);
  if (notFound) {
    return <div>Country not found</div>;
  }
  return data === null ? (
    <CountryDetailShimmer />
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="back-button">
        <button className="back-btn" onClick={() => history.back()}>
          <a href="/">
            <i className="fa-solid fa-arrow-left"></i> Back
          </a>
        </button>
      </div>
      <div className="card-info">
        <div className="country-card-detail">
          <div className="country-flag">
            <img src={data.flag} alt="" />
          </div>
          <div className="card-text-info">
            <div className="left-info">
              <h2 className="name">{data.name}</h2>
              <p className="native-name">
                <b>Native Name </b>
                {data.nativeName}
              </p>
              <p className="population">
                <b>Population </b>
                {data.population}
              </p>
              <p className="region">
                <b>Region </b>
                {data.region}
              </p>
              <p className="sub-region">
                <b>Sub-Region </b>
                {data.subregion}
              </p>
              <p className="capital">
                <b>Capital </b>
                {data.capital.join(", ")}
              </p>
              {data.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border-Countries</b>
                  {data.borders.map((border,idx) => (
                    <Link key={idx} to={`/${border}`}>{border}</Link>
                  ))}
                </div>
              )}
            </div>
            <div className="right-info">
              <p>
                <b>Top Level Domain </b>
                {data.tld}
              </p>
              <p>
                <b>Currencies </b>
                {data.currencies}
              </p>
              <p>
                <b>Languages </b>
                {data.languages}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
