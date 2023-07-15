import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = () => {
   const { color, isDark, setTheme } = useContext(ThemeContext);

   return (
      <>
         <nav className={`navbar-container shadow-sm-${color} navbar-${color}`}>
            <div className="navbar-wrapper">
               <div className="navbar-left">
                  <div className="navbar-brand">
                     <p>Ainurridho F&D</p>
                  </div>
                  <div className={`navbar-group`}>
                     <Link to="/" className={`navbar-link navbar-${color}`}>
                        Menu
                     </Link>
                  </div>
               </div>
               <div className="navbar-right">
                  <div className="theme-toogle">{isDark ? <button onClick={() => setTheme("light")}>light</button> : <button onClick={() => setTheme("dark")}>dark</button>}</div>
                  <Button action="Login" />
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
