import { configureStore } from "@reduxjs/toolkit";
import rightDrawerSlice from './components/features/rightDrawerSlice'
import { modalSlice } from "./components/features/modalSlice";
import { leadsSlice } from "./components/features/leadsSlice"; 
import { headerSlice } from "./components/features/headerSlice";

const combinedReducer = {
    header : headerSlice,
    rightDrawer : rightDrawerSlice,
    modal : modalSlice,
    lead : leadsSlice
  }
  
  export default configureStore({
      reducer: combinedReducer
  })