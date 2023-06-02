import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

type ObservationProps = {
  observationData : {
    id : Number,
    date : Date,
    note : string,
    BirdId : Number,
    UserId : Number
  }
}

/*
Brug BirdId til at finde den rette fugl
Find Location
Brug UserId til at finde user
etc.

*/

export default function ObservationCard({observationData} : ObservationProps ) {

  return (
    <>
      <Card>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {observationData.note}
                </Typography>
                <Typography variant="body2">
                  11. august, 2023
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Køge
                </Typography>
                <CardActions sx={{paddingBottom : '0px', marginBottom : '0px', padding : '0px', marginTop : '5px' }}>
                  <Button sx={{paddingBottom : '0px', marginBottom : '0px', padding : '0px', marginTop : '5px' }} size="small">Se på kort</Button>
                </CardActions>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Luscinia_svecica_volgae.jpg/250px-Luscinia_svecica_volgae.jpg"
                alt="Live from space album cover"
              />
            </Box>
          </Card>

          <br/>
      </>
  );
}