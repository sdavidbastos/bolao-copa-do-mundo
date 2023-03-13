import {v4 as uuid} from "uuid"

type IProps = {
    id?: string,
    matchId: string,
    userId: string
    hint: [number, number]
}
export class Bet {
    id: string
    matchId: string
    userId: string
    hint: [number, number]
    constructor(
        bet: IProps
    ) {
        this.id = bet.id || uuid()
        this.matchId = bet.matchId
        this.userId = bet.userId
        this.hint = bet.hint
    }
}