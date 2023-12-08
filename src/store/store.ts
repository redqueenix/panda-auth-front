import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/user.slice.ts";
import authReducer from "./auth/auth.slice.ts";

export const store = configureStore({
    reducer: {userReducer, authReducer}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;