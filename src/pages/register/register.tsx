import { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    const data = await response.json();
    console.log(data);

    // Handle the response from the backend
    if (data.userCreated) {
      console.log("Register complete!");
      navigate("/Login");
      toast.success("Login successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else if (data.userExists) {
      console.error("Failed register try again!");
      navigate("/Register");
      toast.error("Register failed try again!", {
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Firstname"
            type="firstName"
            value={firstName}
            margin="normal"
            required
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Lastname"
            type="lastName"
            value={lastName}
            margin="normal"
            required
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
          />
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
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
