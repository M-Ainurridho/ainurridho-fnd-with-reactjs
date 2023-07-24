import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderChange } from "../../redux/reducers";

const BtnOrder = ({ id, name, price, category, image }) => {
   const [count, setCount] = useState(0);
   const dispatch = useDispatch();

   useEffect(() => {
      if (count !== 0) {
         dispatch(orderChange({ id, name, price, count, category, image }));
      }
   }, [count]);

   return (
      <>
         <button className="btn-minus" onClick={() => setCount(count - 1)}>
            -
         </button>
         <input type="number" disabled value={count} className="order-count" />
         <button className="btn-plus" onClick={() => setCount(count + 1)}>
            +
         </button>
      </>
   );
};

export default BtnOrder;
