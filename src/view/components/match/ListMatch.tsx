import { Grid } from "@mui/material";
import { IMatch } from "../../../types";
import { CardMatch } from "./CardMatch";

type IProps = {
  matches: IMatch[];
};
export const ListMatch: React.FC<IProps> = ({ matches }) => {
  return (
    <Grid container spacing={2}>
      {matches.map((match) => (
        <Grid item xs={12} sm={6} md={4} key={match.id}>
          <CardMatch match={match} />
        </Grid>
      ))}
    </Grid>
  );
};
