import { BetBuilder } from "../../mock/builders/BetBuilder";
import { MatchBuilder } from "../../mock/builders/MatchBuilder";
import { UserBuilder } from "../../mock/builders/UserBuilder";
import { ListBet } from "../components/bet/ListBet";
import { PageContainer } from "./PageConainer";

export const Bets = () => {
  const bets = Array(10)
    .fill(null)
    .map(() => {
      const {id, ...bet} = new BetBuilder().build();
      const match = new MatchBuilder().setId(bet.matchId).build();
      const {password, ...user} = new UserBuilder().setId(bet.userId);
      return {
        id,
        match,
        user
      };
    });

  return (
    <PageContainer>
      <ListBet bets={bets}></ListBet>;
    </PageContainer>
  );
};
