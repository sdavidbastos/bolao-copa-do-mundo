import { Grid } from "@mui/material";
import { IBet } from "../../../types";
import { CardBet } from "./CardBet";


type IProps = {
  bets: IBet[];
};
export const ListBet: React.FC<IProps> = ({ bets }) => {
  return (
    <Grid container spacing={2}>
      {bets.map((bet) => (
        <Grid item xs={12} sm={6} md={4} key={bet.id}>
          <CardBet bet={bet}/>
        </Grid>
      ))}
    </Grid>
  );
};
