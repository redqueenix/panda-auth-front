import {User} from "../../models/user.model.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllUsers} from "./user.action.ts";

interface UserState {
    loggedUser: User | undefined;
    users: User[];
}

const initialState: UserState = {
    loggedUser: undefined,
    users: []
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    // extraReducers => for async actions
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, () => {
                console.log("getAllUsers.pending");
            })
            .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.users = action.payload;
            })
    }
})

export default userSlice.reducer;

