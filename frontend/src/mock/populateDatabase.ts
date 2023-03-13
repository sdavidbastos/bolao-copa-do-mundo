import { Match } from "../core/entities/Match"
import { User } from "../core/entities/User"
import { servicesFactory } from "../core/factories"
import { BetService } from "../core/service/BetService"
import { MatchService } from "../core/service/MatchService"
import { UserService } from "../core/service/UserService"
import { BetBuilder } from "./builders/BetBuilder"
import { MatchBuilder } from "./builders/MatchBuilder"
import { UserBuilder } from "./builders/UserBuilder"

export const country = ['Alemanha', 'Argentina', 'Arábia Saudita', 'Austrália',
    'Brasil', 'Bélgica', 'Camarões', 'Canadá', 'Catar', 'Coreia do Sul', 'Costa Rica'
    , 'Croácia', 'Dinamarca', 'Equador', 'Espanha', 'Estados Unidos', 'França', 'Gana'
    , 'Holanda', 'Inglaterra', 'Irã', 'Japão', 'Marrocos', 'México', 'País de Gales',
    'Polônia', 'Portugal', 'Senegal', 'Suíça', 'Sérvia', 'Tunísia', 'Uruguai']

const { matchService, userService, betService } = servicesFactory()
const mockUsers = () => {
    return Array(16).fill(0).map(() => (new UserBuilder().build()))
}
const mockMatches = () => {
    const result: Match[] = []
    for (let i = 0; i < country.length; i = i + 2) {
        result.push(new MatchBuilder()
            .setTeam(country[i], country[i + 1])
            .build())
    }
    return result
}
const seedMatches = (matchService: MatchService, matches: Match[]) => {
    matches.forEach(match => matchService.save(match))
}
const seedUsers = (userService: UserService, users: User[]) => {
    users.forEach((user) => userService.save(user))
}
const seedBet = (betService: BetService, users: User[], matches: Match[]) => {
    users.forEach((user, index) => {
        const bet = new BetBuilder().setUserId(user.id).setMatchId(matches[index].id).build()
        betService.save(bet)
    })
}

const users = mockUsers()
const matches = mockMatches()
const populateDatabase = () => {
    seedUsers(userService, users)
    seedMatches(matchService, matches)
    seedBet(betService, users, matches)
}

populateDatabase()