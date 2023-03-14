import { toast } from "react-toastify";
import { Match } from "../core/entities/Match";
import { userFactory,matchFactory, servicesFactory } from "../core/factories";
import { IMatch } from "./types";
import { ISignIn, ISignUp } from "./types/requests";

const userService = userFactory()
const matchService = matchFactory()

export const handleRequestSignIn = async ({ email, password }: ISignIn) => {
    try {
        const user = await userService.signIn({ email, password })
        localStorage.setItem("id", user.id);
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

export const handleRequestSaveMatch = async (match: Match) => {
    try{
        const objMatch = new Match(match)
        await matchService.save(objMatch)
        toast.success("Adicionado com sucesso!")
    }catch(error){
        toast.error("Ops!!!, Algo deu errado")
    }
}