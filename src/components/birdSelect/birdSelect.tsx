import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BirdSelect({ onSelectChange } : any) {

    interface Bird {
        species: string;
        id : number;
    }

    const [birds, setBirds] = useState<Bird[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/birds");
            const data = await response.json();
            const formattedBirds: Bird[] = data.map((bird: any) => ({
                species: bird.species,
                id : bird.id
            }));
            setBirds(formattedBirds);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
  

  const [selectedBid, setSelectedBid] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedBid(event.target.value as string);
    onSelectChange(event.target.value as string)
    console.log(event.target)
  };

  return (
    //<Box sx={{ minWidth: 120 }}>
    <>
        <FormControl sx={{minWidth: 120 }} size="medium">
            <InputLabel id="demo-simple-select-label">Art</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedBid}
            label="Age"
            onChange={handleChange}
            defaultValue='Blåhals'
            >
            {birds.map(item => (
                <MenuItem key={item.species} value={item.species}>
                    {item.species}
                </MenuItem>
            ))}
            {/*<MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>*/}
            </Select>
        
        </FormControl>
    </>
    //</Box>
  );
}