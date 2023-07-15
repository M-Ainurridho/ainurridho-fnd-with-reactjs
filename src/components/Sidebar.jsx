import { useContext } from "react";
import { MenuContext } from "../App";

const Sidebar = () => {
   const { changeMenu } = useContext(MenuContext);

   return (
      <section className="sidebar">
         <ul className="sidebar-menu">
            <li onClick={() => changeMenu("")}>All</li>
            <li onClick={() => changeMenu("food")}>Makanan</li>
            <li onClick={() => changeMenu("drink")}>Minuman</li>
         </ul>
      </section>
   );
};

export default Sidebar;
