import { Grid } from "@mui/material";
import SearchBar from "../../components/searchbar/searchBar";
import SearchBtn from "../../components/searchbar/searchButton";

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "50vh" }}
    >
      <SearchBar />
      <SearchBtn />
    </Grid>
  );
}
