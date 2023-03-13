import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { IUser } from "../../types";

type IProps = { user: IUser };
export const CardContentUser: React.FC<IProps> = ({ user }) => {
  return (
    <>
      <Grid item>
        <Typography variant="h5" component="h2">
          Nome: {user.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Email: {user.email}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h3">
          Pontuação: {user.score}
        </Typography>
      </Grid>
    </>
  );
};
export const CardUser: React.FC<IProps> = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <CardContentUser user={user} />
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => console.log("Click")}
        >
          Adicionar como admin
        </Button>
      </CardActions>
    </Card>
  );
};
