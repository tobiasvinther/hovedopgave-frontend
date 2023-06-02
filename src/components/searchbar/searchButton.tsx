import Button from "@mui/material/Button";



export default function SearchBtn({searchValue} : any) {

  async function handleSearch() {
    console.log("You clicked search with the value", searchValue)
  }

  return (
      <Button variant="contained" onClick={handleSearch}>Søg</Button>
  );
}
