import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useEffect, useState } from "react";

type ObservationProps = {
  observationData : {
    id : Number,
    date : Date,
    note : string,
    birdId : Number,
    UserId : Number,
    ImageId : Number
  }
}

/*
Brug BirdId til at finde den rette fugl
Find Location
Brug UserId til at finde user
etc.

*/

export default function ObservationCard({observationData} : ObservationProps ) {

  const [imagePath, setImagePath] = useState<string>("");
  const [species, setSpecies] = useState<string>("");

  useEffect(() => {
    fetchImagePath(observationData?.id);
    fetchSpecies(observationData.birdId);
  }, [])

  async function fetchImagePath(observationId : Number) {
    const response = await fetch("http://localhost:8080/api/imageByObservation/" + observationId);
    const data = await response.json();
    const urlString : string = data.path?.replaceAll("\\", "/");
    const imageUrl = "http://localhost:8080/" + urlString;
    setImagePath(imageUrl);
    console.log("Image path", data?.path);
  } 

  async function fetchSpecies(birdId : Number) {
    const response = await fetch("http://localhost:8080/api/birdsById/" + birdId);
    const data = await response.json();
    const foundSpecies = data.species;
    setSpecies(foundSpecies);
  }


  return (
    <>
      <Card>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {species}
                </Typography>
                {/*
                <Typography variant="body2">
                  11. august, 2023
                </Typography>
                */}
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {observationData?.date?.toLocaleString("de-DE").substring(0,10)}
                </Typography>
                <Typography variant="body2">
                {observationData?.note}
                </Typography>
                <CardActions sx={{paddingBottom : '0px', marginBottom : '0px', padding : '0px', marginTop : '5px' }}>
                  <Button sx={{paddingBottom : '0px', marginBottom : '0px', padding : '0px', marginTop : '5px' }} size="small">Se på kort</Button>
                </CardActions>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, height : 145 }}
                image={imagePath}
                alt={`Billede af ${species}`}
              />
            </Box>
          </Card>

          <br/>
      </>
  );
}