import { IMatch, IScore } from "../../types"
import { generateId } from "../utils/generateId"

export class Match {
    id: string
    teamA: string
    teamB: string
    matchDate: number
    score: IScore
    activate: boolean
    constructor(match: IMatch
    ) {
        this.id = match.id || generateId()
        this.teamA = match.teamA
        this.teamB = match.teamB
        this.matchDate = match.matchDate
        this.score = match.score || {teamA: 0, teamB: 0}
        this.activate = match.activate || true
    }
}


