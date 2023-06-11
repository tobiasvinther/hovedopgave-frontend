import React from 'react';
import { Avatar, Box, Typography, Container, Grid } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar
        alt="Your Name"
        src="/path/to/profile-picture.jpg"
        sx={{ width: 150, height: 150, marginBottom: 7 }}
      />
      <Typography variant="h4" gutterBottom>
        Your Name
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your Email
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your bird observations
      </Typography>
    </Box>
  );
};

export default Profile;