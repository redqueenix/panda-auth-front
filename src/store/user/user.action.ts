import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../models/user.model.ts";
import axios from "axios";
import {RootState} from "../store.ts";
import {BASE_URL, USER_URL} from "../../commun/constants/constants.ts";

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async (_, {getState}) => {
        const token = (getState() as RootState).authReducer.authInfo?.accessToken;
        if (!token) {
            console.error('No token found in session');
            throw new Error('Unauthorized Access');
        }
        try {
            console.log('Api call ' + BASE_URL + USER_URL + ', token : ', token);
            const response = await axios.get(BASE_URL + USER_URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('response.data ', response.data);
            return response.data as User[];
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
);