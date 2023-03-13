import { beforeEach, describe, expect, it } from 'vitest'

import { matchFactory } from "../../api/factories"
import { generateId } from "../../api/utils/generateId"
import { MatchBuilder } from "../builders/MatchBuilder"

const { matchData, matchService } = matchFactory()
beforeEach(() => {
    matchData.length = 0
})

describe("Match Service", () => {
    it("should save new match", () => {
        const {id, ...matchWithoutId} = new MatchBuilder().setId("").build()
        matchService.save(matchWithoutId)
        const result = matchData[0]
        expect(result).toMatchObject(matchWithoutId)
    })
    it("should return one match", () => {
        const matchs = [new MatchBuilder().build(), new MatchBuilder().build()]
        matchData.push(...matchs)

        const match = matchService.findMatchById(matchs[0].id)

        expect(match).toEqual(matchs[0])
    })
    it("should return all matchs", () => {
        const matchs = [new MatchBuilder().build(), new MatchBuilder().build()];
        matchData.push(...matchs)

        const result = matchService.findMatchsById()
        expect(result).toEqual(matchs)
    })

    it("Should delete match", () => {
        const match = new MatchBuilder().build()
        const { id } = match

        matchData.push(match)
        matchService.deleteMatch(id)
        expect(matchData).toHaveLength(0)
    })
    it("Should update match", () => {
        const match = new MatchBuilder().build()
        const updateMatch = new MatchBuilder()
        matchData.push(match)

    })

    it("should find list of matchs", () => {
        const matchs = [new MatchBuilder().build(), new MatchBuilder().build(), new MatchBuilder().build()]
        matchData.push(...matchs)
        const ids = [matchs[0].id, matchs[1].id]
        const result = matchService.findMatchsById(...ids)

        expect([matchs[0], matchs[1]]).toEqual(result)
    })

    it("should return exception if try find match with invalid id", () => {
        const id = generateId()
        expect(() => matchService.findMatchById(id)).toThrow("Match not exist")
    })

    it("should return exception if try save match with invalid id", () => {
        const match = new MatchBuilder().build()

        expect(() => matchService.save(match)).toThrow("Match not exist")
    })
})
