import FnD from "../components/FnD";
// import Sidebar from "../components/Sidebar";
import Orders from "../components/Orders";

const Menu = () => {
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
