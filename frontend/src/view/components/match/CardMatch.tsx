import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { IMatch } from "../../types";
import { formattedDate, formattedMoney } from "../../utils";

type IProps = { match: Required<IMatch> };
export const CardContentMatch: React.FC<IProps> = ({ match }) => {
  return (
    <>
      <Grid item>
      <Typography variant="h4" component="h3">
          {match?.score[0] ?? 0} vs {match?.score[1] ?? 0}
        </Typography>
        <Typography variant="subtitle1">
          Data do jogo: {match.matchDate}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          valor: {formattedMoney(match?.value ?? 0)}
        </Typography>
      </Grid>
    </>
  );
};
export const CardMatch: React.FC<IProps> = ({ match }) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <CardContentMatch match={match} />
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => console.log("Click")}
        >
          Apostar
        </Button>
      </CardActions>
    </Card>
  );
};
