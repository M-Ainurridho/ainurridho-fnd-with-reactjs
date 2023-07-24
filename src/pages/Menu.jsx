import FnD from "../components/FnD";
import Sidebar from "../components/Sidebar";
import Orders from "../components/Orders";

const Menu = () => {
   return (
      <>
         <main className="flex flex-wrap my-5 justify-between container mx-auto bg-yellow-200">
            <Sidebar />
            <FnD />
            <Orders />
         </main>
      </>
   );
};

export default Menu;
