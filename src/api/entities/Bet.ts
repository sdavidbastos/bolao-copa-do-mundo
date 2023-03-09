type IBet = {
    id: string,
    matchId: string,
    bettorsId: string[],
    amount: number,
    value: number,
}
export class Bet {
    id: string
    matchId: string
    bettorsId: string[]
    amount: number
    value: number
    constructor(
        { id, matchId, bettorsId, amount, value }: IBet
    ) {
        this.id=id
        this.matchId=matchId
        this.bettorsId=bettorsId
        this.amount=amount
        this.value=value
    }
}
