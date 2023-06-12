import { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../components/authprovider/authProvider";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (data.failed || data.passwordfailed) {
      console.log("Email or Password didnt match try again!");
      navigate("/Login");
      toast.error("Login failed try again!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else if (data) {
      setAuth(true);
      console.log("Login successfull!");
      navigate("/");
      toast.success("Login successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            margin="normal"
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            margin="normal"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Login
          </Button>
          <Button>
            <a href="/register">Register new user profil</a>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
