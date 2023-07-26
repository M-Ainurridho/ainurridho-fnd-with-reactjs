import { useState } from "react";
import { useDispatch } from "react-redux";
import { customerInfo } from "../redux/reducers";
import { useNavigate } from "react-router-dom";

const CustomerName = ({ flex, setCsName }) => {
   const [nama, setNama] = useState("");
   const [catatan, setCatatan] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(customerInfo({ nama, catatan }));
      navigate("/thankspage");
   };

   return (
      <>
         <div className={`${flex ? flex : "hidden"} fixed top-0 left-0 right-0 bottom-0 bg-neutral-800/50 justify-center items-center text-sm`}>
            <div className="wrapper w-1/4  bg-white rounded-md shadow-neutral-700 shadow-md">
               <form onSubmit={handleSubmit} className="px-3 py-2">
                  <p className="mt-1">Nama Pemesan*</p>
                  <input type="text" value={nama} placeholder="atas nama..." className="border-2 w-full mt-0.5 p-1 rounded-sm" required onChange={(e) => setNama(e.target.value)} />

                  <p className="mt-1">Catatan</p>
                  <textarea rows="4" className="border-2 w-full mt-0.5 p-1 rounded-sm" onChange={(e) => setCatatan(e.target.value)}></textarea>

                  <div className="text-end mt-2"></div>
                  <div className="text-end mt-2">
                     <button className="bg-red-500 hover:bg-red-600 p-1 rounded-sm text-white" onClick={() => setCsName(false)}>
                        Cancel
                     </button>
                     <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 p-1 rounded-sm ml-1 text-white">
                        Confirm
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default CustomerName;
