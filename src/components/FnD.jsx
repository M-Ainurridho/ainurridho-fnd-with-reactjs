import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../App";
import { allMenu } from "../data";
import ButtonPlus from "./ButtonPlus";

const FnD = () => {
   const [lists, setLists] = useState([]);
   const { menu, newOrder } = useContext(MenuContext);
   // const [data, setData] = useState({});

   useEffect(() => {
      if (menu === "food") {
         const data = allMenu.filter((m) => m.category === menu);
         setLists(data);
      } else if (menu === "drink") {
         const data = allMenu.filter((m) => m.category === menu);
         setLists(data);
      } else {
         setLists(allMenu);
      }
   }, [menu]);

   const handleClick = (id, count) => {
      newOrder({ id, count });
   };

   const UIFnD = lists.map((m, i) => {
      return (
         <div className="card" key={i}>
            <div className="card-img">
               <img src={require(`../assets/images/f&b/${m.image}`)} alt="" />
            </div>
            <div className="card-body">
               <p className="card-title">{m.name}</p>
               <p className="card-text">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(m.price)}-</p>
               <ButtonPlus orderId={m.id} countChange={(id, count) => handleClick(id, count)} />
            </div>
         </div>
      );
   });

   return <section className="menu-group">{UIFnD}</section>;
};

export default FnD;
