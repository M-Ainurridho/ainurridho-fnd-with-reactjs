import { useNavigate } from "react-router-dom";
import ImgThanks from "../assets/images/icons/thank-you.png";
import { useEffect } from "react";

const Thanks = () => {
   const navigate = useNavigate();

   useEffect(() => {
      setTimeout(function () {
         navigate("/");
      }, 5000);
   }, []);

   return (
      <>
         <div className="flex flex-col text-center w-full  mt-20">
            <p>Mohon ditunggu pesannya</p>
            <p>Jika pesanan sudah siap namamu akan segera dipanggil</p>

            <img src={ImgThanks} alt="Thanks" className="w-40 h-40 mx-auto mt-2" />
         </div>
      </>
   );
};

export default Thanks;
