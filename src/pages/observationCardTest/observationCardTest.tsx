import { Container } from "../../components/container/container";
import ObservationCard from "../../components/observationCard/observationCard";
import { useEffect } from "react";

type ObservationProps = {
    observationData : {
      id : Number,
      date : Date,
      note : string,
      BirdId : Number,
      UserId : Number
    }
  }
  
//harcoded test data
const observationTest : ObservationProps = {
  observationData : {
    id : 1,
    date : new Date(),
    note : "A note",
    BirdId : 1,
    UserId : 1
  }
}

async function fetchObservations() {
  try {
      const response = await fetch("http://localhost:8080/api/observations/Råge");
      const data = await response.json();
      console.log("Result", data)
  } catch (error) {
      console.error("Error fetching data:", error);
  }
};


export default function ObservationCardTest() {

  useEffect(() => {
    fetchObservations();
  }, [])

    return(
        <Container>
            <ObservationCard observationData={observationTest.observationData}></ObservationCard>
            <ObservationCard observationData={observationTest.observationData}></ObservationCard>
            <ObservationCard observationData={observationTest.observationData}></ObservationCard>
        </Container> 
    )
    
}