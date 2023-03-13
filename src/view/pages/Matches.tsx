import { MatchBuilder } from "../../tests/builders/MatchBuilder";
import { ListMatch } from "../components/match/ListMatch";
import { PageContainer } from "./PageConainer";

export const Matches: React.FC = () => {
  const matches = Array(10)
    .fill(null)
    .map(() => new MatchBuilder().build());

  return (
    <PageContainer>
      <ListMatch matches={matches} />;
    </PageContainer>
  );
};
