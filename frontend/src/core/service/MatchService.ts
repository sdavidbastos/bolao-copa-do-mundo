import HttpAdapter from "../../view/httpAdapter";
import { baseUrl } from "../baseUrl";
import { Match } from "../entities/Match";

export class MatchService {
    constructor(private readonly client: HttpAdapter) { }
    save(match: Match) {
        return this.client.post<Match>(`${baseUrl}/matches`, match)
    }
}