import { useState } from "react";
import { useSelector } from "react-redux";
import CustomerName from "./CustomerName";

const Orders = () => {
   const orders = useSelector((state) => state.orders);
   const [csName, setCsName] = useState(false);

   const UIOrder = orders.data.map((order, i) => {
      return (
         <div className="order-card flex mt-2 text-xs items-center border-2 border-neutral-200 p-2 rounded-md" key={i}>
            <div className="order-count basis-auto ">{order.count}x</div>
            <div className="order-item flex basis-3/5 items-center">
               <div className="order-img w-2/4 overflow-hidden ">
                  <img src={require(`../assets/images/f&b/${order.image}`)} alt={order.image} className="h-12 w-12 object-cover rounded-full mx-auto" />
               </div>
               <div className="order-name text-ellipsis w-full truncate">{order.name}</div>
            </div>
            <div className="order-price basis-2/5 text-right">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(order.count * order.price)}</div>
         </div>
      );
   });

   return (
      <>
         <section style={{ flexBasis: "28%" }} className="order ">
            <div className="order-items rounded-md border-2 px-2">
               <h3 className="order-header text-lg mt-2">Keranjang Belanja</h3>
               <hr className="mb-3" />
               {UIOrder}
               <hr className="mt-3" />
               <div className="order-total">
                  <p className="my-1">Total : {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(orders.total)}</p>
                  {orders.data.length > 0 ? (
                     <button className="bg-indigo-500 hover:bg-indigo-600 block w-full rounded-md text-center p-1 text-white mb-2 shadow-sm shadow-indigo-600" onClick={() => setCsName(!csName)}>
                        Pesan Sekarang
                     </button>
                  ) : (
                     <button className="bg-neutral-400 block w-full rounded-md text-center p-1 text-white mb-2" disabled>
                        Pesan Sekarang
                     </button>
                  )}
               </div>
            </div>
         </section>
         {csName && <CustomerName flex={"flex"} setCsName={setCsName} />}
      </>
   );
};

export default Orders;
