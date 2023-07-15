import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../App";
import { allMenu } from "../data";

const Orders = () => {
   const { order } = useContext(MenuContext);
   const [orders, setOrders] = useState([]);
   const [num, setNum] = useState(0);
   const [total, setTotal] = useState(0);

   useEffect(() => {
      if (order?.id) {
         const data = allMenu.find((menu) => {
            if (menu.id == order.id) {
               return menu;
            }
         });

         const { id, name, price, discount, category, image } = data;

         const sementara = orders.find((menu) => {
            if (menu.id === order.id) {
               menu.count = order.count;
               setTotal(total + menu.price);
               return true;
            } else {
               return false;
            }
         });

         if (!sementara || false) {
            setOrders((value) => [...value, { id, name, price, discount, category, image, count: order.count }]);
            setTotal(total + price);
         }
      }
   }, [order]);

   console.log(orders);

   const UIOrder = orders.map((order, i) => {
      return (
         <div className="order-card" key={i}>
            <div className="order-count">{order.count}x</div>
            <div className="order-item">
               <div className="order-img">
                  <img src={require(`../assets/images/f&b/${order.image}`)} alt="" />
               </div>
               <div className="order-name">{order.name}</div>
            </div>
            <div className="order-price">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(order.count * order.price)}</div>
         </div>
      );
   });

   return (
      <section className="order">
         <div className="order-items radius-1">
            <h3 className="order-header">Keranjang Belanja</h3>
            {UIOrder}
            <div className="order-total">
               <p>Total Harga : {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(total)}</p>
               <button className="btn-primary btn-full radius-1 pointer" onClick={() => window.location.reload()}>
                  Bayar Sekarang
               </button>
            </div>
         </div>
      </section>
   );
};

export default Orders;
