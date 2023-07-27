import { useEffect } from "react";
import FnD from "../components/FnD";
// import Sidebar from "../components/Sidebar";
import Orders from "../components/Orders";
import { useDispatch } from "react-redux";
import { clearOrders } from "../redux/reducers";

const Menu = () => {
   document.title = "Menu | Ainurridho FnD"
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(clearOrders());
   }, []);

   return (
      <>
         <main className="flex flex-wrap my-5 gap-x-2 justify-between container mx-auto">
            {/* <Sidebar /> */}
            <FnD />
            <Orders />
         </main>
      </>
   );
};

export default Menu;
