import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="bg-purple-600 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">FuelGo</h1>
      <button onClick={toggleTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
    </nav>
  );
};
export default Navbar;