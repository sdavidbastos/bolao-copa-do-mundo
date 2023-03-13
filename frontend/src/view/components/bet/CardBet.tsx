import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { IBet } from "../../types";
import { formattedMoney } from "../../utils";
import { CardContentMatch } from "../match/CardMatch";

type IProps = {
  bet: IBet;
};

export const CardContentBet: React.FC<IProps> = ({ bet }) => {
  return (
    <Grid item>
      <CardContentMatch match={bet.match} />
      <Grid item>
        <Typography variant="subtitle1" color="textSecondary">
          Valor da aposta: {formattedMoney(bet.match.value)}
        </Typography>
      </Grid>
    </Grid>
  );
};
export const CardBet: React.FC<IProps> = ({ bet }) => {
  return (
    <Card>
      <CardContent>
        <CardContentBet bet={bet} />
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
