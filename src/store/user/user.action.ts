import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../models/user.model.ts";

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return [{name:'user1', email:'user1@gmail.com'}, {name:'user2', email:'user2@gmail.com'}] as User[];
    }
);