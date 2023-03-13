import { toast } from "react-toastify";
import { Api } from "../api/api";
import { IUser } from "../types";

const api = Api.getInstance()

export const handleUserRequest = (user: IUser) => {
    try {
        api.userService.signUp(user)
        toast.success("De bom!!")
    } catch (error: any) {
        toast.error(error?.message || "Ops!!! Algo deu errado")
    }
}