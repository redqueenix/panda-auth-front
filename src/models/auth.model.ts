import {User} from "./user.model.ts";

export interface AuthInfo {
    accessToken : string;
    refreshToken : string;
    loggedUser : User;
}

export class Login {
    username : string;
    password : string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}