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
   name: "order",
   initialState: {
      data: [],
   },
   reducers: {
      createNewOrder: (state, action) => {
         state.data = [...state.data, action.payload];
      },

      overwriteData: (action) => {
         state.data = action.payload;
      },
   },
});

export const { changeMenu } = menuReducer.actions;
export const { createNewOrder, overwriteData } = ordersReducer.actions;
