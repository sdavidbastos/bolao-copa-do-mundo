import { faker } from "@faker-js/faker";
import { Bet } from "../../api/entities/Bet";
import { Match } from "../../api/entities/Match";
import { IBettings } from "../../types";
import { MatchBuilder } from "./MatchBuilder";
import { UserBuilder } from "./UserBuilder";
function generateBettings(bettings: IBettings = {}, amount = 10) {
    Array(amount).fill(0).forEach(() => {
        const score = [faker.datatype.number({ min: 0, max: 10 }), faker.datatype.number({ min: 0, max: 10 })].join(',')
        if (bettings[score]) {
            bettings[score].push(new UserBuilder().build())
            return
        }
        bettings[score] = [new UserBuilder().build()]
    })
    return bettings

}
export class BetBuilder {
    id: string = faker.datatype.uuid()
    match: Match = new MatchBuilder().build()
    bettings: IBettings = generateBettings()
    amount: number = faker.datatype.number({ min: 0, max: 100 })
    value: number = faker.datatype.number({ min: 0, max: 10 })

    build() {
        return new Bet({ id: this.id, match: this.match, bettings: this.bettings, value: this.value, amount: this.amount })
    }
}