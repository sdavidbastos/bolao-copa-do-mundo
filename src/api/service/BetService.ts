import { IGenerateId, IBet } from "../../types";
import { Bet } from "../entities/Bet";
import { IRepository } from "../interfaces/IRepository";

export class BetService {
    constructor(private readonly repository: IRepository<Bet>, private generateId: IGenerateId) { }
    save(bet: IBet) {
        if (!bet?.id) return this.repository.add(new Bet({ ...bet, id: this.generateId() }))

        const betObj = this.findBetById(bet.id)
        this.repository.update(betObj)
    }
    findBetById(id: string) {
        const bet = this.repository.getById(id);
        if (!bet) throw new Error("Bet not exist")
        return bet
    }

    findBetsById(...ids: string[]) {
        if (!ids.length) return this.repository.getAll();
        return ids.map((id) => this.repository.getById(id));
    }

    deleteBet(id: string) {
        this.findBetById(id);
        this.repository.delete(id)
        return
    }
}