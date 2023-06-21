import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        movieSlice: movieSlice.reducer
    }
})

export default store;