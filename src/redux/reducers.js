import { createSlice } from "@reduxjs/toolkit";

export const menuReducer = createSlice({
   name: "menu",
   initialState: {
      name: "",
   },
   reducers: {
      changeMenu: (state, action) => {
         state.name = action.payload;
      },
   },
});

export const ordersReducer = createSlice({
   name: "orders",
   initialState: {
      customer: "",
      data: [],
      total: 0,
   },
   reducers: {
      createNewOrder: (state, action) => {
         state.data = [...state.data, action.payload];
      },

      overwriteData: (state, action) => {
         state.data = action.payload;
      },

      minusPrice: (state, action) => {
         state.total -= action.payload;
      },

      plusPrice: (state, action) => {
         state.total += action.payload;
      },

      customerInfo: (state, action) => {
         state.customer = action.payload;
      },

      clearOrders: (state) => {
         state.data = [];
         state.customer = "";
         state.total = 0;
      },
   },
});

export const { changeMenu } = menuReducer.actions;
export const { createNewOrder, overwriteData, plusPrice, minusPrice, customerInfo, clearOrders } = ordersReducer.actions;
