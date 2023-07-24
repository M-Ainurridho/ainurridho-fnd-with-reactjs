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
      id: 0,
      name: "",
      price: 0,
      count: 0,
      category: "",
      image: "",
   },
   reducers: {
      orderChange: (state, action) => {
         state.id = action.payload.id;
         state.name = action.payload.name;
         state.price = action.payload.price;
         state.count = action.payload.count;
         state.category = action.payload.category;
         state.image = action.payload.image;
      },
   },
});

export const { changeMenu } = menuReducer.actions;
export const { orderChange } = ordersReducer.actions;
