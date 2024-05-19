import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};
export default App;
