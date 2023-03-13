import HttpAdapter from "../../view/httpAdapter";
import { baseUrl } from "../baseUrl";

import { Bet } from "../entities/Bet";

export class BetService {
    constructor(private readonly client: HttpAdapter,private readonly routePath = "bets" ) { }
    save(bet: Bet) {
        return this.client.post<Bet>(`${baseUrl}/${this.routePath}`,bet)
    }
}