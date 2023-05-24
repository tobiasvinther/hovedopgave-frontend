import { Grid, Button, Typography } from "@mui/material";
import PhotoGrid from "../../components/fotofeed/photoGrid";

export default function BirdInfo() {
    return( 

    <>
    <div style={{ marginLeft: '190px', marginRight: '190px', marginTop: '40px' }}>
        <Grid 
            container spacing={2} 
            //sx={{ marginX: { xs: '40px', md: '190px' }, marginY: { xs: '4px', md: '20px' } }}
            >

            <Grid item xs={12}>
                <Typography variant="h4">Blåhals</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">{loremIpsum}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Seneste billeder af Blåhals</Typography>
            </Grid>
            <Grid item xs={12}>
                <PhotoGrid/> 
            </Grid>
            
        </Grid>
    </div>
    

    {/*
    <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: "10vh" }}
    >
        <h3>Fuglenavn</h3>
        <PhotoGrid/>
    </Grid>
    */}

    </>
    )

}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."