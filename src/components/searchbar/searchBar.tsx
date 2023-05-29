import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Bird {
  label: string;
}

const SearchBar: React.FC = () => {
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

  if (birds.length === 0) {
    return null;
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={birds}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Søg på en fugl" />
        )}
      />
    </div>
  );
};

export default SearchBar;
