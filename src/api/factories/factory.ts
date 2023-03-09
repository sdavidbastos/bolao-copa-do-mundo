import { Match } from "../entities/Match";
import { InMemoryRepository } from "../repositories/InMemoryRepository";
import { MatchService } from "../service/MatchService";
import { generateId } from "../utils/generateId";

export function matchFactory() {
    const matchData: Match[] = []
    const matchRepository = new InMemoryRepository<Match>(matchData)
    const matchService = new MatchService(matchRepository, generateId)
    return { matchData, matchRepository, matchService }
}