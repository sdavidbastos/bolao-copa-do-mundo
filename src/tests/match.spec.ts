import { beforeEach, describe, expect, it } from 'vitest'

import { matchFactory } from "../api/factories/factory"
import { generateId } from "../api/utils/generateId"
import { MatchBuilder } from "./builders/matchBuilder"

const { matchData, matchRepository, matchService } = matchFactory()
beforeEach(() => {
    matchData.length = 0
})

describe("Repository", () => {

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

describe("Service", () => {
    it("should save new match", () => {
        const match = new MatchBuilder().setId("").build()
        const {id, ...partialMatch} = match
        matchService.save(match)
        const result = matchData[0]
        expect(result).toMatchObject(partialMatch)
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

    it("Should delete match", ()=>{
        const match = new MatchBuilder().build()
        const {id} = match

        matchData.push(match)
        matchService.deleteMatch(id)
        expect(matchData).toHaveLength(0)
    })
    it("Should update match", ()=>{
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

    it("should return exception if try find match with invalid id", ()=>{
        const id = generateId()
        expect(() => matchService.findMatchById(id)).toThrow("Match not exist")
    })

    it("should return exception if try save match with invalid id", ()=>{
        const match = new MatchBuilder().build()
 
        expect(() => matchService.save(match)).toThrow("Match not exist")
    })

})

export { }