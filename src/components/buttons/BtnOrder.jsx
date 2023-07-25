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
         <button className="btn-minus bg-red-500 hover:bg-red-600 py-0.5 basis-1/5 w-full rounded-sm" onClick={() => setCount(count - 1)}>
            -
         </button>
         <input type="number" disabled value={count} style={{ borderWidth: "1px" }} className="order-count w-11/12 text-center text-sm border-neutral-200 rounded-sm" />
         <button className="btn-plus bg-green-500 hover:bg-green-600 py-0.5 basis-1/5 w-full rounded-sm" onClick={() => setCount(count + 1)}>
            +
         </button>
      </>
   );
};

export default BtnOrder;
