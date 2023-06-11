import { Avatar, Typography, Container } from "@mui/material";
import myDummyImage from "../../components/dummyImage/dummypicture.jpg";

const Profile = () => {
  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Your Name"
        src={myDummyImage}
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
    </Container>
  );
};

export default Profile;
