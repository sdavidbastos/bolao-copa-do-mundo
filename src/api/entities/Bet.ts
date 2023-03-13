import { IBet, IBettings } from "../../types"
import { generateId } from "../utils/generateId"
import { Match } from "./Match"
import { User } from "./User"
export class Bet {
    id: string
    match: Match
    bettings: IBettings
    amount: number
    value: number
    open: boolean
    constructor(
        bet: IBet
    ) {
        this.id = bet.id || generateId()
        this.match = bet.match
        this.bettings = bet.bettings || {}
        this.amount = bet.amount || 0
        this.value = bet.value || 0
        this.open = bet.open || true
    }
}