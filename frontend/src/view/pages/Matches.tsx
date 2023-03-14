import { useContext, useEffect, useState } from "react";
import { MatchBuilder } from "../../mock/builders/MatchBuilder";
import { FormMatch } from "../components/match/FormMatch";
import { ListMatch } from "../components/match/ListMatch";
import { BasicModal } from "../components/modal/BasicModal";
import { AppContext } from "../context";
import { handleRequestListMatch } from "../handleRequest";
import { PageContainer } from "./PageConainer";

export const Matches: React.FC = () => {
  const { user } = useContext(AppContext);
  const [listMatch, setListMatch ] = useState<Math[]>([])

  useEffect(()=>{
    (async()=>{
      const list = (await handleRequestListMatch()) || []
      setListMatch(list)
    })()
  }, [])

  return (
    <PageContainer>
      {user?.isAdmin && (
        <BasicModal buttonName="Criar Nova Partida">
          <FormMatch />
        </BasicModal>
      )}
      <ListMatch matches={listMatch} />;
    </PageContainer>
  );
};
