import { useEffect, useState } from "react";

const ButtonPlus = ({ countChange, orderId }) => {
   const [count, setCount] = useState(0);
   const [id, setId] = useState(0);

   const handleClick = (e) => {
      setCount(count + 1);
      setId(orderId);
   };

   useEffect(() => {
      countChange(id, count);
   }, [count]);

   return (
      <>
         <button className="btn-success btn-full radius-1 mt-1 pointer" onClick={handleClick}>
            Pesan
         </button>
      </>
   );
};

export default ButtonPlus;
