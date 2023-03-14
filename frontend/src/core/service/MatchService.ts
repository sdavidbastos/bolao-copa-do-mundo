import HttpAdapter from "../../view/httpAdapter";
import { IMatch } from "../../view/types";
import { baseUrl } from "../baseUrl";
import { Match } from "../entities/Match";

export class MatchService {
    constructor(private readonly client: HttpAdapter, private readonly routePath = 'matches') { }
    save(match: Match) {
        return this.client.post<Match>(`${baseUrl}/${this.routePath}`, match)
    }
    list(){
        return this.client.get<Math[]>(`${baseUrl}/${this.routePath}`)
    }

    create(match: IMatch){
        if(!match?.value) throw new Error("Valor é obrigatório")
        if(!match?.teamA || !match?.teamB) throw new Error("Times são obrigatório")
        const a = new Match(match)
    }
}