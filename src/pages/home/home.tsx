import { Grid, Stack } from "@mui/material";
import SearchBar from "../../components/searchbar/searchBar";
import Button from "@mui/material/Button";
import SearchBtn from "../../components/searchbar/searchButton";
import { useEffect, useState } from "react";

export default function Home() {

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    console.log("Current searchValue", searchValue)
  }, [searchValue])

  function handleSearchChange(event : any, value : string) {
    setSearchValue(value || ''); // If value is null, set an empty string
    console.log("handlesearchchange", value)
  }

  return (
    <>
    <div style={{ marginLeft: '190px', marginRight: '190px', marginTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <Stack spacing={2} direction="row">
        <SearchBar onSearchChange={handleSearchChange} onDropdownChange={handleSearchChange}/>
        <SearchBtn searchValue={searchValue} />
      </Stack>
    </div>
    </>
    
  );
}
