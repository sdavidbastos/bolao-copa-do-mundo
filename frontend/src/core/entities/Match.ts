import { v4 as uuid } from "uuid"

type IProps = {
    id?: string
    teamA: string
    teamB: string
    matchDate: Date
    value: number
    isOpen: boolean
    score?: [number, number]
    amout?: number
}
export class Match {
    id: string
    teamA: string
    teamB: string
    matchDate: Date
    score: [number, number]
    value: number
    isOpen: boolean
    constructor(match: IProps
    ) {
        this.id = match.id || uuid()
        this.teamA = match.teamA
        this.teamB = match.teamB
        this.matchDate = match.matchDate
        this.value = match.value
        this.isOpen = match.isOpen ?? true
        this.score = match.score || [0, 0]
    }
}


