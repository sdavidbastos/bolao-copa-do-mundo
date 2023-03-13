import {v4 as uuid} from "uuid"

export type IPropsUser = {
    id?: string;
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    score?: number;
}
export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    score: number;

    constructor(user: IPropsUser) {
        this.id = user.id || uuid()
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.isAdmin = user.isAdmin ?? false;
        this.score = user.score || 0;
    }
}