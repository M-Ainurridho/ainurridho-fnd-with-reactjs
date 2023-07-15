import FnD from "../components/FnD";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Orders from "../components/Orders";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Menu = () => {
   const { color } = useContext(ThemeContext);

   return (
      <>
         <Navbar />
         <main className={`bg-${color}`}>
            <Sidebar />
            <FnD />
            <Orders />
         </main>
      </>
   );
};

export default Menu;
