export type Score = { teamA: number, teamB: number }
export type IMatch = {
    id: string,
    teamA: string,
    teamB: string,
    matchDate: number,
    score: Score
}
export class Match {
    id: string
    teamA: string
    teamB: string
    matchDate: number
    score: Score
    constructor({ id, matchDate, score, teamA, teamB }: IMatch
    ) {
        this.id = id
        this.teamA = teamA
        this.teamB = teamB
        this.matchDate = matchDate
        this.score = score
    }
}


