import { servicesFactory } from "./factories";

export class Api {
    private static instance: Api
    readonly userService
    readonly matchService
    readonly betService

    private constructor() {
        const { userService, matchService, betService } = servicesFactory()
        this.userService = userService
        this.matchService = matchService
        this.betService = betService
    }

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance
    }
}

const api = Api.getInstance()

api.userService.signUp({ name: "david", email: "david@david.com", password: "123456" })