import { beforeEach, describe, expect, it } from 'vitest'

import { matchFactory } from "../../api/factories"
import { generateId } from "../../api/utils/generateId"
import { MatchBuilder } from "../builders/MatchBuilder"

const { matchData, matchRepository } = matchFactory()
beforeEach(() => {
    matchData.length = 0
})

describe("Match Repository", () => {

    it('should find match', () => {
        const match = new MatchBuilder().build()
        matchData.push(match)
        const result = matchRepository.getById(match.id)
        
        expect(result).toEqual(match)
        expect(matchData).toHaveLength(1)
    })
    it('should add match', () => {
        const match = new MatchBuilder().build()
        matchRepository.add(match)
        const result = matchData[0]
        expect(result).toEqual(match)
        expect(matchData).toHaveLength(1)
    })

    it("should delete match", () => {
        const match = new MatchBuilder().build()
        matchData.push(match)
        matchRepository.delete(match.id)
        expect(matchData).toHaveLength(0)
    })

    it("should return void if try delete not exist match", () => {
        const id = generateId()

        matchRepository.delete(id)
        expect(matchData).toHaveLength(0)
    })

    it("should return all matches", () => {
        const matches = Array(10).fill(0).map(() => {
            const match = new MatchBuilder().build()
            matchRepository.add(match)
            return match
        })
        const allMatches = matchRepository.getAll()

        expect(allMatches).toEqual(matches)
        expect(matchData).toHaveLength(10)
    })

    it("should update match", () => {
        const match = new MatchBuilder().build()
        const updatedMatch = new MatchBuilder().setId(match.id).build()

        matchData.push(match)
        matchRepository.update(updatedMatch)

        expect(matchData[0]).toEqual(updatedMatch)
        expect(matchData).toHaveLength(1)

    })
})