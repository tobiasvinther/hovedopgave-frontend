import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Typography variant="h4" gutterBottom>  
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField 
        type="firstName"
        label="Firstname"
        margin="normal"
            required
            fullWidth
        value={firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
      />
      <TextField
        type="lastName"
        label="Lastname"
        margin="normal"
            required
            fullWidth
        value={lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
      />
      <TextField
        type="email"
        label="Email"
        margin="normal"
            required
            fullWidth
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        margin="normal"
            required
            fullWidth
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      </Box>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
        Register
      </Button>
      </Box>
    </Container>
  );
};

export default Register;