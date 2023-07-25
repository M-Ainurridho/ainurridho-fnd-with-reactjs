import { useDispatch } from "react-redux";
import { changeMenu } from "../redux/reducers";

const Sidebar = () => {
   const dispatch = useDispatch();

   return (
      <section style={{ flexBasis: "10%" }} className="sidebar bg-red-100">
         <ul className="sidebar-menu">
            <li onClick={() => dispatch(changeMenu("all"))}>All Menu</li>
            <li onClick={() => dispatch(changeMenu("foods"))}>Makanan</li>
            <li onClick={() => dispatch(changeMenu("drinks"))}>Minuman</li>
         </ul>
      </section>
   );
};

export default Sidebar;
