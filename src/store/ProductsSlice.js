import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      title: "A good parfume",
      image:
        "https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=",
      price: 9.99,
      description: "this is the most beautiful parfume in this world",
    },

    {
      title: "A Nice parfume",
      image:
        "https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=",
      price: 99.99,
      description: "You deserve this parfume! man",
    },
  ],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
});
