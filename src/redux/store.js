import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, ordersReducer } from "./reducers";

export default configureStore({
   reducer: {
      menu: menuReducer.reducer,
      orders: ordersReducer.reducer,
   },
});
