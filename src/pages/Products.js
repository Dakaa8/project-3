import React from "react";
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of product 1",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of product 2",
    image: "https://via.placeholder.com/300",
  },
  // Add more products as needed
];

function Products() {
  return (
    <Container maxWidth="md" style={{ padding: "40px 0" }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
