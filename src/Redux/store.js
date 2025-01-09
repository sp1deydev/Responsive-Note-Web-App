import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./noteSlice";


const store = configureStore({
    reducer: {
        note: noteSlice.reducer,
    },
})

export default store;