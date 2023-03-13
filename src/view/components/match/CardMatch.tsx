import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { IMatch } from "../../../types";
import { formattedDate } from "../../utils";

type IProps = { match: IMatch };
export const CardContentMatch: React.FC<IProps> = ({ match }) => {
  return (
    <>
      <Grid item>
        <Typography variant="h5" component="h2">
          {match.teamA} vs {match.teamB}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Data do jogo: {formattedDate(match.matchDate)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h3">
          {match.score?.teamA ?? 0} vs {match.score?.teamB ?? 0}
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
