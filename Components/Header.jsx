import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isDark, setIsdark] = useTheme();

  // if (isDark) {
  //   document.body.classList.add("dark"); //Manipulating DOM is not good practice in react
  // } else {
  //   document.body.classList.remove("dark");
  // }
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsdark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};
export default Header;
