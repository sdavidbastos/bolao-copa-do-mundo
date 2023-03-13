import HttpAdapter from "../../view/httpAdapter";
import { BetService } from "../service/BetService";
import { MatchService } from "../service/MatchService";
import { UserService } from "../service/UserService";

export function userFactory() {
    const client = new HttpAdapter()
    const userService = new UserService(client)
    return userService
}

export function matchFactory() {
    const matchClient = new HttpAdapter()
    const matchService = new MatchService(matchClient)
    return matchService
}


export function betFactory() {
    const betClient = new HttpAdapter()
    const betService = new BetService(betClient)
    return betService
}

export function servicesFactory() {
    return { userService: userFactory(), matchService: matchFactory(), betService: betFactory() }
}