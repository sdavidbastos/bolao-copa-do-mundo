import { Match, Score } from "../../api/entities/Match"
import { generateId } from "../../api/utils/generateId"
import { generateRandomString } from "../../api/utils/randomString"

export class MatchBuilder {
    id: string = generateId()
    teamA: string = generateRandomString(10)
    teamB: string = generateRandomString(10)
    matchDate: number = Date.now()
    score: Score = { teamA: 0, teamB: 0 }

    setId(id: string){
        this.id = id

        return this
    }

    build(): Match {
        return new Match(
            {
                id: this.id, matchDate: this.matchDate, score: this.score, teamA: this.teamA, teamB: this.teamB
            })
    }
}