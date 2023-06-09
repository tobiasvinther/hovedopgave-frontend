import { Stack } from "@mui/material";
import SearchBar from "../../components/searchbar/searchBar";
import SearchBtn from "../../components/searchbar/searchButton";
import { useEffect, useState } from "react";
import ObservationCard from "../../components/observationCard/observationCard";
import Typography from "@mui/material/Typography";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [observationList, setObservationList] = useState<any>([]);

  useEffect(() => {
    console.log("Current searchValue", searchValue);
  }, [searchValue]);

  useEffect(() => {
    console.log("ObservationList:", observationList);
  }, [observationList]);

  function handleSearchChange(event: any, value: string) {
    setSearchValue(value || ""); // If value is null, set an empty string
    console.log("handlesearchchange", value);
  }

  async function fetchObservations() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/observations/" + searchValue
      );
      const data = await response.json();
      setObservationList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div
        style={{
          marginLeft: "190px",
          marginRight: "190px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <Stack spacing={2} direction="row">
          <SearchBar
            onSearchChange={handleSearchChange}
            onDropdownChange={handleSearchChange}
          />
          <SearchBtn searchValue={searchValue} onSearch={fetchObservations} />
        </Stack>
      </div>
      <div
        style={{
          marginLeft: "360px",
          marginRight: "360px",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        {observationList.length > 0 && (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            style={{ marginBottom: "20px" }}
          >
            Observationer: {observationList?.length}
          </Typography>
        )}
        <Stack spacing={1.25} direction="column">
          {observationList?.map((result: any) => (
            <ObservationCard
              key={result.id}
              observationData={result}
            ></ObservationCard>
          ))}
        </Stack>
      </div>
    </>
  );
}
