import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AuthInfo, Login} from "../../models/auth.model.ts";
import {AUTH_LOGIN_URL, BASE_URL} from "../../commun/constants/constants.ts";

export const userLogin = createAsyncThunk(
    "auth/userLogin",
    async (loginBody: Login) => {
        try {
            console.log('Api call ' + BASE_URL + AUTH_LOGIN_URL + ', body : ', loginBody);
            const response = await axios.post(BASE_URL + AUTH_LOGIN_URL, loginBody);
            console.log('Logging successful: ', response.data);
            return response.data as AuthInfo;
        } catch (error) {
            console.error('Error logging in: ', error);
            throw error;
        }


    }
);