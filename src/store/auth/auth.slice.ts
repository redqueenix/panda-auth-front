import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userLogin} from "./auth.action.ts";
import {AuthInfo} from "../../models/auth.model.ts";

interface AuthState {
    authInfo : AuthInfo | undefined;
}

const initialState: AuthState = {
    authInfo: undefined,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    // extraReducers => for async actions
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, () => {
                console.log("logging in ...");
            })
            .addCase(userLogin.fulfilled, (state, action: PayloadAction<AuthInfo>) => {
                state.authInfo = action.payload;
            })
    }
})

export default authSlice.reducer;


