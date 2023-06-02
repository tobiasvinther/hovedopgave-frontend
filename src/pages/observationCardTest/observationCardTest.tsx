import { Container } from "../../components/container/container";
import ObservationCard from "../../components/observationCard/observationCard";

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

export default function ObservationCardTest() {
    return(
        <Container>
            <ObservationCard observationData={observationTest.observationData}></ObservationCard>
            <ObservationCard observationData={observationTest.observationData}></ObservationCard>
            <ObservationCard observationData={observationTest.observationData}></ObservationCard>
        </Container> 
    )
    
}