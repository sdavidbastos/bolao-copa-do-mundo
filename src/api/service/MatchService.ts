import { Match } from "../entities/Match";
import { InMemoryRepository } from "../repositories/InMemoryRepository";

type GenerateId = () => string
export class MatchService {
    constructor(private readonly repository: InMemoryRepository<Match>, private generateId: GenerateId) { }
    save(match: Match) {
        const {id} = match
        if(!!id){
            this.findMatchById(id)
            this.repository.update({...match, id})
            return
        }
        const matchId = this.generateId()
        this.repository.add({...match, id: matchId})
    }
    findMatchById(id: string) {
        const match = this.repository.getById(id);
        if(!match) throw new Error("Match not exist")
        return match
    }

    findMatchsById(...ids: string[]){
        if(!ids.length) return this.repository.getAll();
        return ids.map((id) => this.repository.getById(id));
    }

    deleteMatch(id: string){
        this.findMatchById(id);
        this.repository.delete(id)
        return 
    }
}