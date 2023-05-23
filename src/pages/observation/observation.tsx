import { Button, Stack, TextField } from "@mui/material";
import DateTimePickerComponent from "../../components/dateTimePicker/dateTimePicker";
import SearchBar from "../../components/searchbar/searchBar";
import { useState } from "react";

export default function Observation() {
  const [inputs, setInputs] = useState({
    species: "",
    latitude: "",
    longitude: "",
    Note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <Stack alignItems="center" paddingTop="50px">
        <SearchBar />
        <TextField
          name="latitide"
          sx={{ marginBottom: 5, marginTop: 5, width: 300 }}
          required
          id="Breddegrad-required"
          label="Breddegrad"
          value={inputs.latitude}
          onChange={handleChange}
        />
        <TextField
          name="longtitude"
          sx={{ marginBottom: 5, width: 300 }}
          required
          id="Længdegrad-required"
          label="Længdegrad"
          value={inputs.longitude}
          onChange={handleChange}
        />
        <DateTimePickerComponent />
        <TextField
          name="note"
          value={inputs.Note}
          sx={{ marginBottom: 5, width: 300 }}
          id="Note"
          label="Note"
          multiline
          rows={4}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" onClick={() => handleSumbit}>
          Submit
        </Button>
      </Stack>
    </>
  );
}
