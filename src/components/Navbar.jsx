import { Link } from "react-router-dom";
import BtnLogin from "./buttons/BtnLogin";

const Navbar = ({ children }) => {
   return (
      <>
         <nav className="navbar bg-neutral-200 drop-shadow-sm">
            <div className="container mx-auto flex h-16 w-full bg-neutral-200 justify-between items-center">
               <div className="navbar-left flex">
                  <div className="navbar-brand mr-3">
                     <p>Ainurridho F&D</p>
                  </div>
                  <Link to="/" className="hover:text-blue-500 duration-300">
                     Menu
                  </Link>
               </div>
               <div className="navbar-right">
                  <BtnLogin action="login" />
               </div>
            </div>
         </nav>

         <div>{children}</div>
      </>
   );
};

export default Navbar;
