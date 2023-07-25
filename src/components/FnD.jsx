import { useEffect, useState } from "react";
import { allMenu } from "../data";
import BtnOrder from "./buttons/BtnOrder";

const FnD = () => {
   const [lists, setLists] = useState([]);

   useEffect(() => {
      setLists(allMenu);
   }, []);

   const UIFnD = lists.map(({ id, name, price, category, image }, i) => {
      return (
         <div className="card border-2 border-neutral-200 rounded-md overflow-hidden self-start shadow-sm" key={i}>
            <div className="card-header overflow-hidden">
               <img src={require(`../assets/images/f&b/${image}`)} alt="" className="h-48 w-full object-cover hover:scale-105 hover:duration-300" />
            </div>
            <div className="card-body py-1 px-2">
               <p className="card-title">{name}</p>
               <p className="card-text">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price)}-</p>
               <div className="btn-order flex gap-x-2 my-1">
                  <BtnOrder id={id} name={name} price={price} category={category} image={image} />
               </div>
            </div>
         </div>
      );
   });

   return (
      <section style={{ flexBasis: "71%" }} className="menu-group grid grid-cols-1 md:grid-cols-3 gap-3">
         {UIFnD}
      </section>
   );
};

export default FnD;
