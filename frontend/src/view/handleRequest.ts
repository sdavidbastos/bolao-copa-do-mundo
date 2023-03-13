import { toast } from "react-toastify";
import { userFactory } from "../core/factories";
import { populateDatabase } from "../mock/populateDatabase";
import { ISignIn, ISignUp } from "./types/requests";

const userService = userFactory()
export const handleRequestSignIn = async ({ email, password }: ISignIn) => {
    try {
        const user = await userService.signIn({ email, password })
        localStorage.setItem("id", user.id);
        if (user.isAdmin) populateDatabase()
        toast.success("Usuario logado com sucesso!")
        return user
    } catch (error) {
        const erro = error as Error
        toast.error(erro?.message)
    }
}

export const handleRequestSignUp = async ({ name, email, password }: ISignUp) => {
    try {
        await userService.signUp({ name, email, password })
        toast.success("Registrado com sucesso!")
        return handleRequestSignIn({ email, password })
    } catch (error: any) {
        toast.error(error?.message)
    }
}