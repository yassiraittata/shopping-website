import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "A good parfume",
      image:
        "https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=",
      price: 9.99,
      description: "this is the most beautiful parfume in this world",
      amount: 1,
    },
    {
      id: 3,
      title: "A great parfume",
      image:
        "https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=",
      price: 19.99,
      description: "this is the most beautiful parfume in this world",
      amount: 1,
    },
  ],
  totalPrice: 29.98,
  totalQuantity: 2,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((el) => el.id === newItem.id);
      console.log(newItem);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: 1,
        });

        state.totalQuantity++;
        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        existingItem.amount++;
        state.totalPrice = state.totalPrice + existingItem.price;
      }
    },
    decreaseItemAmount(state, action) {
      const selectedItem = action.payload;
      const item = state.items.find((el) => el.id === selectedItem.id);
      item.amount--;
      state.totalPrice = state.totalPrice - item.price;
    },
    removeItemFromCart(state, action) {
      const item = action.payload;
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - item.price * item.amount;
      state.items = state.items.filter((element) => element.id !== item.id);
    },
    checkout(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = CartSlice.actions;
