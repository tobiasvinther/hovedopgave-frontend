import { Camera } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function NotAuthNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Camera />
          </Link>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FOTOFUGLEN
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button key="Photos">
            <Typography textAlign="center">
              <Link
                to={`Photos`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Photos
              </Link>
            </Typography>
          </Button>
          <Button key="Login">
            <Typography textAlign="center">
              <Link
                to={`Login`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </Typography>
          </Button>
          <Button key="Signup">
            <Typography textAlign="center">
              <Link
                to={`Signup`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Signup
              </Link>
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
