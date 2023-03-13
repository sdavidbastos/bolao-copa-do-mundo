import { Bet } from "../../core/entities/Bet"
import { faker } from '@faker-js/faker';

export class BetBuilder {
    id: string = faker.datatype.uuid()
    matchId: string = faker.datatype.uuid()
    userId: string = faker.datatype.uuid()
    hint: [number, number] = [faker.datatype.number({ min: 0, max: 10 }), faker.datatype.number({ min: 0, max: 10 })]

    setUserId(userId: string) {
        this.userId = userId
        return this
    }

    setMatchId(matchId: string) {
        this.matchId = matchId
        return this
    }


    build() {
        return new Bet({ id: this.id, matchId: this.matchId, hint: this.hint, userId: this.userId })
    }
}