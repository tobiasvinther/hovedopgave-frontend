import { Camera } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";


export default function Navbar(){

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit"  aria-label="logo">
                    <Camera />
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    FOTOFUGLEN
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Profile</Button>
                    <Button color="inherit">Photos</Button>
                    <Button color="inherit">Observation</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}