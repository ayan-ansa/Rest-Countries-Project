import "./CountryDetailShimmer.css";
export default function CountryDetailShimmer() {
  return (
    <main>
      <div className="back-button">
        <button className="back-btn">
          <a href="">
            <i className="fa-solid fa-arrow-left"></i> Back
          </a>
        </button>
      </div>
      <div className="card-info">
        <div className="flag-img"></div>
        <div className="card-text">
          <h2 className="name color"></h2>
          <p className="native-name color"></p>
          <p className="population color"></p>
          <p className="region color"></p>
          <p className="sub-region color"></p>
          <p className="capital color"></p>
        </div>
      </div>
    </main>
  );
}
