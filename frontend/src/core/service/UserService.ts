import HttpAdapter from "../../view/httpAdapter";
import { ISignIn, ISignUp } from "../../view/types/requests";
import { baseUrl } from "../baseUrl";
import { User } from "../entities/User";

export class UserService {
    constructor(private readonly client: HttpAdapter, private routeName:string = 'users') { }
    async save(user: User){
        this.client.post<User>(`${baseUrl}/${this.routeName}`, user)
    }
    async findById(id: string) {
        const user = await this.client.get<User>(id)
        if (!user) throw new Error("Usario não é válido")
        const { password: pswd, ...userWithoutPassword } = user
        return userWithoutPassword
    }

    async findByEmail(email: string) {
        return (await this.client.get<User[]>(`${baseUrl}/${this.routeName}?email=${email}`))[0]
    }

    async signIn({ email, password }: ISignIn) {
        const user = await this.findByEmail(email)
        if (!user || user.password !== password) throw new Error("Usuario ou senha inválidos")
        const {password: passwd, ...currentUser} = user
        return currentUser
    }


    async signUp({ name, email, password }: ISignUp) {
        if (!email) throw new Error("Email não informado")
        if (!password) throw new Error("Password não informado")
        if (!!(await this.findByEmail(email))) throw new Error("Email já registrado")

        const { password: passwd, ...user } = await this.client.post<User>(`${baseUrl}/${this.routeName}`, new User({ email, name, password }));
        return user
    }
}