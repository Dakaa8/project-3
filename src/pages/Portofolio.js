import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const portfolioItems = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "https://via.placeholder.com/300",
  },
  // Add more portfolio items as needed
];

function Portofolio() {
  return (
    <Container maxWidth="md" style={{ padding: "40px 0" }}>
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={3}>
        {portfolioItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Paper style={{ padding: "20px", height: "100%" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%" }} />
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Portofolio;
