import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Match } from '../../../api/entities/Match';


type IMatch = { id?: string, match: Match}
const bull = ()  => (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    x
  </Box>
)
const CardMatchContent = ({id, match}: IMatch) => {
    return(
        <>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {match.teamA}
            </Typography>
            {bull()}
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {match.teamB}
            </Typography>
            <Typography variant="h5" component="div">
              be{bull()}nev{bull()}o{bull()}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
    )
};

export function CardMatch({id, match}:IMatch) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{cardMatchContent({match})}</Card>
    </Box>
  );
}