import { faker } from "@faker-js/faker"
import { Match } from "../../api/entities/Match"
import { generateId } from "../../api/utils/generateId"
import { generateRandomString } from "../../api/utils/randomString"
import { IScore } from "../../types"

export class MatchBuilder {
    id: string = generateId()
    teamA: string = faker.address.country()
    teamB: string = faker.address.country()
    matchDate: number = Date.now()
    score: IScore = { teamA: faker.datatype.number({ min: 0, max: 10 }), teamB: faker.datatype.number({ min: 0, max: 10 }) }

    setId(id: string) {
        this.id = id
        return this
    }

    build(): Match {
        return new Match({
            id: this.id, matchDate: this.matchDate, score: this.score, teamA: this.teamA, teamB: this.teamB
        })
    }
}