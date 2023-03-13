import { toast } from "react-toastify";
import { userFactory } from "../core/factories";
import { ISignIn, ISignUp } from "./types/requests";

const userService = userFactory()
export const handleRequestSignIn = async ({ email, password }: ISignIn) => {
    try {
        const user = await userService.signIn({ email, password })
        localStorage.setItem("id", user.id);
        toast.success("Usuario logado com sucesso!")
        return user
    } catch (error) {
        toast.error(error?.message)
    }
}

export const handleRequestSignUp = async ({ name, email, password }: ISignUp) => {
    try {
        await userService.signUp({ name, email, password })
        toast.success("Registrado com sucesso!")
        return handleRequestSignIn({email, password})
    } catch (error: any) {
        toast.error(error?.message)
    }
}