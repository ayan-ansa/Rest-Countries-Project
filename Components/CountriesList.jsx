import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

export const BASE_URL = process.env.PARCEL_BASE_URL;
export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/name/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      {countriesData.length === 0 ? (
        <CountryListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter(
              (data) =>
                data.name.common.toLowerCase().includes(query) ||
                data.region.toLowerCase().includes(query)
            )
            .map((data, idx) => (
              <CountryCard
                name={data.name.common}
                imageUrl={data.flags.svg}
                capital={data.capital?.[0]}
                population={data.population.toLocaleString("en-IN")}
                region={data.region}
                data={data}
                key={idx}
              />
            ))}
        </div>
      )}
    </>
  );
}
