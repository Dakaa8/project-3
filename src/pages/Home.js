import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const HeroSection = styled('div')({
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "64px 0",
  textAlign: "center",
});

const HeroText = styled(Typography)({
  marginBottom: "24px",
});

const AboutSection = styled(Container)({
  padding: "40px 0",
});

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="sm">
          <HeroText variant="h2" component="h1">
            Welcome to My Portfolio
          </HeroText>
          <HeroText variant="h5">
            I'm passionate about creating beautiful web experiences.
          </HeroText>
          <Button variant="contained" color="secondary">
            View Portfolio
          </Button>
        </Container>
      </HeroSection>

      {/* About Section */}
      <AboutSection maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero vitae sapien fermentum, nec maximus tellus
          pellentesque. Sed suscipit sem nec ultrices fermentum. Nullam ut
          dapibus purus.
        </Typography>
      </AboutSection>

      {/* Other sections can be added similarly */}
    </div>
  );
}

export default Home;
