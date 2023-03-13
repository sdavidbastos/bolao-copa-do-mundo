import { IUser } from "../../types";
import { generateId } from "../utils/generateId";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    score: number;

    constructor(user: IUser) {
        this.id = user.id || generateId();
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.isAdmin = user.isAdmin || false;
        this.score = user.score || 0;
    }
}