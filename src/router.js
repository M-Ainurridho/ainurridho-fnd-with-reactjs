import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

const Router = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Navbar>
                  <Menu />
               </Navbar>
            }
         ></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
   );
};

export default Router;
