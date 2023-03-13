import { BetBuilder } from "../../tests/builders/BetBuilder";
import { ListBet } from "../components/bet/ListBet";
import { PageContainer } from "./PageConainer";

export const Bets = () => {
  const bets = Array(10)
    .fill(null)
    .map(() => new BetBuilder().build());

  return (
    <PageContainer>
      <ListBet bets={bets}></ListBet>;
    </PageContainer>
  );
};
