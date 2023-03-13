import { IGenerateId, IUser } from "../../types";
import { User } from "../entities/User";
import { IRepository } from "../interfaces/IRepository";
import { generateId } from "../utils/generateId";

export class UserService {
    constructor(private readonly repository: IRepository<User>, private generateId: IGenerateId) { }

    save(user: IUser) {
        if (user?.id) return this.repository.update(new User(user))
        const userObject = new User({ ...user, id: generateId() })
        this.repository.add(userObject)

        return userObject
    }

    findById(id: string) {
        const user = this.repository.getById(id)
        if (!user) throw new Error("User not found")
        return user
    }

    findByEmail(email: string) {
        return this.repository.getByKeyName("email", email);
    }

    signIn(email: string, password: string) {
        const message = new Error("Invalid user or password")
        const user = this.findByEmail(email)

        if (!user) throw message
        if (user.password !== password) throw message

        return user
    }


    signUp(user: IUser) {
        if (!user?.email) throw new Error("Email not informed")
        if (!!this.findByEmail(user.email)) throw new Error("User already registered")

        return this.save(user)
    }
}