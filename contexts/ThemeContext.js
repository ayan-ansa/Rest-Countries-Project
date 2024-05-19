import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <ThemeContext.Provider value={[isDark, setIsdark]}>
      {children}
    </ThemeContext.Provider>
  );
}
