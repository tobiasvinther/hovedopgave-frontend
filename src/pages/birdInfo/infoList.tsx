import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Paper } from '@mui/material';

export default function InfoList({order, redList} : any) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Paper variant="outlined" >
            <List>
                <ListItem disablePadding>
                    <ListItemIcon >
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Orden: ' + order} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Rødliste: ' + redList} />
                </ListItem>
            </List>
        </Paper>
    </Box>
  );
}