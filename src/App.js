import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import "./App.css";

export const ThemeContext = createContext(null);
export const MenuContext = createContext(null);

const App = () => {
   const [color, setColor] = useState("light");
   const [isDark, setIsDark] = useState(false);
   const [menu, setMenu] = useState("");
   const [order, setOrder] = useState({});

   const setTheme = (theme) => {
      setIsDark(!isDark);
      setColor(theme);
   };

   const changeMenu = (value) => {
      setMenu(value);
   };

   const newOrder = (data) => {
      setOrder(data);
   };

   // const addOrder = ({ id, value }) => {
   //    setCount(count + value);
   //    setOrderId(id);
   // };

   // useEffect(() => {
   //    if (count) {
   //       setOrder({ id: orderId, count });
   //       setPrevId(orderId);
   //    }
   // }, [count]);

   return (
      <ThemeContext.Provider value={{ color, isDark, setTheme }}>
         <MenuContext.Provider value={{ menu, order, changeMenu, newOrder }}>
            <Router>
               <Routes>
                  <Route path="/" element={<Menu />}></Route>
                  <Route path="*" element={<NotFound />}></Route>
               </Routes>
            </Router>
         </MenuContext.Provider>
      </ThemeContext.Provider>
   );
};

export default App;
