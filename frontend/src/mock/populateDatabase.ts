import { Match } from "../core/entities/Match"
import { User } from "../core/entities/User"
import { servicesFactory } from "../core/factories"
import { BetService } from "../core/service/BetService"
import { MatchService } from "../core/service/MatchService"
import { UserService } from "../core/service/UserService"
import { BetBuilder } from "./builders/BetBuilder"
import { MatchBuilder } from "./builders/MatchBuilder"
import { UserBuilder } from "./builders/UserBuilder"
import fs from "fs";
import { promisify } from "util";
import { countries } from "../constants/country"

const mockUsers = () => {
    return Array(16).fill(0).map(() => (new UserBuilder().build()))
}
const mockMatches = () => {
    return countries.reduce((previous: Match[], current, currentIndex, array): Match[] => {
        if (!!(currentIndex % 2)) return previous
        previous.push(new MatchBuilder().setTeam(current, array[currentIndex + 1]).build())
        return previous
    }, [])
}
const mockBets = (users: User[], matches: Match[]) => {
    return users.map((user, index) => {
        return new BetBuilder().setUserId(user.id).setMatchId(matches[index].id).build()
    })

}

const users = mockUsers()
const matches = mockMatches()
const bets = mockBets(users, matches)

const obj = {
    users,
    matches,
    bets,
    countries
}


const readFileAsync = promisify(fs.readFile);

async function readData() {
  try {
    const data = await readFileAsync("data.json", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readData();