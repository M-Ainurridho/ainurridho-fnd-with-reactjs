import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";

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
         <Route path="/thankspage" element={<Thanks />}></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
   );
};

export default Router;
