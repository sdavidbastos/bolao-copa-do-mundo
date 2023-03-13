import { Bet } from "../entities/Bet";
import { Match } from "../entities/Match";
import { User } from "../entities/User";
import { InMemoryRepository } from "../repositories/InMemoryRepository";
import { BetService } from "../service/BetService";
import { MatchService } from "../service/MatchService";
import { UserService } from "../service/UserService";
import { generateId } from "../utils/generateId";

export function matchFactory() {
    const matchData: Match[] = []
    const matchRepository = new InMemoryRepository<Match>(matchData)
    const matchService = new MatchService(matchRepository, generateId)
    return { matchData, matchRepository, matchService }
}

export function userFactory() {
    const userData: User[] = []
    const userRepository = new InMemoryRepository<User>(userData)
    const userService = new UserService(userRepository, generateId)
    return { userData, userRepository, userService }
}

export function betFactory() {
    const betData: Bet[] = []
    const betRepository = new InMemoryRepository<Bet>(betData)
    const betService = new BetService(betRepository, generateId)
    return { betData, betRepository, betService }
}

export function servicesFactory() {
    const { userService } = userFactory()
    const { matchService } = matchFactory()
    const { betService } = betFactory()

    return { userService, matchService, betService }
}