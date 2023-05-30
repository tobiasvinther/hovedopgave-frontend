import { Grid, Typography } from "@mui/material";
import PhotoGrid from "../../components/fotofeed/photoGrid";
import { useEffect, useState } from "react";
import BirdSelect from "../../components/birdSelect/birdSelect";
import InfoList from "./infoList";

export default function BirdInfo() {

    interface Bird {
        id : number,
        species: string;
        subspecies : string;
        order : string;
        redList : string;
        description : string;
    }

    const [currentBird, setCurrentBird] = useState<Bird>()

    const [selectedItem, setSelectedItem] = useState<string>("Blåhals");

    function handleSelectChange (selectedItem: string) {
        console.log('selectedItem', selectedItem)
        setSelectedItem(selectedItem);
    };

    useEffect(() => {
        fetchBird();
    }, [selectedItem])

    const fetchBird = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/birds/" + selectedItem);
            const data = await response.json();
            const thisBird : Bird = {
                id : data.id,
                species: data.species,
                subspecies : data.subspecies,
                order : data.order,
                redList : data.redList,
                description : data.description
            }
            setCurrentBird(thisBird);
            console.log("currentBird", data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return( 
    <>
    <div style={{ marginLeft: '190px', marginRight: '190px', marginTop: '40px' }}>
        <Grid 
            container spacing={2} 
            >
            <Grid item xs={1}>
                <Typography variant="h4">{selectedItem}</Typography>
            </Grid>
            <Grid item xs={1}>
                <BirdSelect onSelectChange={handleSelectChange}/>
            </Grid>
            <Grid item xs={12}>
                <InfoList order={currentBird?.order} redList={currentBird?.redList}/>
            </Grid>  
            <Grid item xs={12}>
                <Typography variant="body1">{currentBird?.description}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Seneste billeder af {selectedItem}</Typography>
            </Grid>
            <Grid item xs={12}>
                <PhotoGrid birdId={currentBird?.id}/> 
            </Grid>
        </Grid>
    </div>

    </>
    )

}