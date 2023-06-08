import { Camera } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authprovider/authProvider";
import { toast } from "react-toastify";

export default function AuthNavbar() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/logout", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    if (data.sessionDestroyed) {
      console.log("Session destroyed!");
      setAuth(false);
      navigate("/");
      toast.success("Logout successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // will stay for 3 sec
      });
    }
  };

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
          <Button key="Profile">
            <Typography textAlign="center">
              <Link
                to={`Profile`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Profile
              </Link>
            </Typography>
          </Button>
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
          <Button key="Observation">
            <Typography textAlign="center">
              <Link
                to={`Observation`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Observation
              </Link>
            </Typography>
          </Button>
          <Button key="Logout" onClick={handleLogout}>
            <Typography textAlign="center">
              <Link
                to={`Observation`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Logout
              </Link>
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
