import { IGenerateId, IMatch } from "../../types";
import { Match } from "../entities/Match";
import { IRepository } from "../interfaces/IRepository";

export class MatchService {
    constructor(private readonly repository: IRepository<Match>, private generateId: IGenerateId) { }
    save(match: IMatch) {
        if (!match?.id) return this.repository.add(new Match({ ...match, id: this.generateId() }))

        const matchObj = this.findMatchById(match.id)
        this.repository.update(matchObj)
    }
    findMatchById(id: string) {
        const match = this.repository.getById(id);
        if (!match) throw new Error("Match not exist")
        return match
    }

    findMatchsById(...ids: string[]) {
        if (!ids.length) return this.repository.getAll();
        return ids.map((id) => this.repository.getById(id));
    }

    deleteMatch(id: string) {
        this.findMatchById(id);
        this.repository.delete(id)
        return
    }
}