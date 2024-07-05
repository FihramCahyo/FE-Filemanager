import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./folderslice";
// import fileReducer from "./fileslice";

const store = configureStore({
    reducer:{
        folders: folderReducer,
    }
})
console.log(store.getState());
store.subscribe("store changed:", store.getState);  
export default store;