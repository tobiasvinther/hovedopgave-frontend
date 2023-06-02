import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Bird {
  label: string;
}

export default function SearchBar({ onSearchChange, onDropdownChange } : any) {
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/birds");
      const data = await response.json();
      const formattedBirds: Bird[] = data.map((bird: any) => ({
        label: bird.species,
      }));
      setBirds(formattedBirds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleInputChange(event : any) {
    const { value } = event.target;
    onSearchChange(event, value); // Invoke the callback with the updated value
    console.log(value)
  }

  function handleSelectFromAutocomplete(event : any, value : any) {
    onDropdownChange(event, value?.label);
    console.log("Valgt fugl:", value?.label);
  }

  if (birds.length === 0) {
    return (
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={birds}
          getOptionLabel={(option) => option.label}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Failed to fetch birds" error />
          )}
        />
      </div>
    );
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={birds}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        onChange={handleSelectFromAutocomplete}
        renderInput={(params) => (
          <TextField {...params} label="Hvilken fugl vil du se i dag?" onChange={handleInputChange}/>
        )}
      />
    </div>
  );
}
