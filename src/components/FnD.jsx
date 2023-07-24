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
         <div className="card" key={i}>
            <div className="card-img">
               <img src={require(`../assets/images/f&b/${image}`)} alt="" />
            </div>
            <div className="card-body">
               <p className="card-title">{name}</p>
               <p className="card-text">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price)}-</p>
               <div className="btn-order">
                  <BtnOrder id={id} name={name} price={price} category={category} image={image} />
               </div>
            </div>
         </div>
      );
   });

   return <section className="menu-group bg-indigo-300 basis-2/4">{UIFnD}</section>;
};

export default FnD;
