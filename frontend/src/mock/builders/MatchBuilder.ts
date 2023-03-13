import { faker } from '@faker-js/faker';
import { Match } from "../../core/entities/Match"
export class MatchBuilder {
    id: string = faker.datatype.uuid()
    teamA: string = faker.address.country()
    teamB: string = faker.address.country()
    matchDate: Date = faker.date.between('2022-11-20T00:00:00.000Z', '2022-12-18T00:00:00.000Z',)
    score: [number, number] = [faker.datatype.number({ min: 0, max: 10 }), faker.datatype.number({ min: 0, max: 10 })]
    value: number = faker.datatype.number({ min: 10, max: 100 })

    setId(id: string) {
        this.id = id
        return this
    }

    setTeam(teamA: string, teamB: string) {
        this.teamA = teamA
        this.teamB = teamB
        return this
    }

    build(): Match {
        return new Match({
            id: this.id, matchDate: this.matchDate, score: this.score, teamA: this.teamA, teamB: this.teamB, value: this.value, isOpen: true
        })
    }
}