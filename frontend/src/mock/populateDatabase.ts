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
    return country.reduce((previous:Match[], current, currentIndex, array): Match[] => {
        if (!!(currentIndex % 2)) return previous
        previous.push(new MatchBuilder().setTeam(current, array[currentIndex+1]).build())
        return previous
    }, [])
}
const seedMatches = (matchService: MatchService, matches: Match[]) => {
    return Promise.all(matches.map(match => matchService.save(match)))
}
const seedUsers = async (userService: UserService, users: User[]) => {
    return Promise.all(users.map((user) => userService.save(user)))
}
const seedBet = (betService: BetService, users: User[], matches: Match[]) => {
    return Promise.all(users.map((user, index) => {
        const bet = new BetBuilder().setUserId(user.id).setMatchId(matches[index].id).build()
        return betService.save(bet)
    }))
}

const users = mockUsers()
const matches = mockMatches()
export const populateDatabase = async () => {
    await seedUsers(userService, users)
    await seedMatches(matchService, matches)
    await seedBet(betService, users, matches)
}
