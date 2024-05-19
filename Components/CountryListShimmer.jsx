import "./CountryListShimmer.css";
export default function CountryListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((ele, i) => {
        return (
          <div key={i} className="country-card shimmer-card">
            <div className="flag-container"></div>
            <div className="country-name detail"></div>
            <div className="population detail"></div>
            <div className="region detail"></div>
            <div className="capital detail"></div>
          </div>
        );
      })}
    </div>
  );
}
