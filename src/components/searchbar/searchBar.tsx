import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={birds}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Søg på en fugl" />}
    />
  );
}

const birds = [
  { label: "Blåhals" },
  { label: "Solsort" },
  { label: "Stork" },
  { label: "Allike" },
  { label: "Krage" },
  { label: "Musvit" },
  { label: "Grågås" },
];
