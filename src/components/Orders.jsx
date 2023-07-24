import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
   const orderRedux = useSelector((state) => state.orders);
   const [orders, setOrders] = useState([]);
   const [total, setTotal] = useState(0);

   useEffect(() => {
      if (orderRedux?.id) {
         const { id, name, price, count, category, image } = orderRedux;

         if (orders.length > 0) {
            const order = orders.find((o) => o.id === id);

            if (order) {
               order.count = count;
            } else {
               setOrders((value) => [...value, { id, name, price, count, category, image }]);
            }
         } else {
            setOrders((value) => [...value, { id, name, price, count, category, image }]);
         }
         setTotal(total + price);
      }
   }, [orderRedux]);

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
      <section className="order bg-lime-300 basis-1/4">
         <div className="order-items radius-1">
            <h3 className="order-header">Keranjang Belanja</h3>
            {UIOrder}
            <div className="order-total">
               <p>Harga : {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(total)}</p>
               <button className="btn-primary btn-full radius-1 pointer" onClick={() => window.location.reload()}>
                  Bayar Sekarang
               </button>
            </div>
         </div>
      </section>
   );
};

export default Orders;
