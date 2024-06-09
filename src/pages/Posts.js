import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const posts = [
  {
    id: 1,
    title: "Post 1",
    excerpt: "Excerpt of Post 1",
    date: "June 1, 2024",
  },
  {
    id: 2,
    title: "Post 2",
    excerpt: "Excerpt of Post 2",
    date: "June 3, 2024",
  },
  // Add more posts as needed
];

function Posts() {
  return (
    <Container maxWidth="md" style={{ padding: "40px 0" }}>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <List>
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <ListItem button>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="textPrimary">
                      {post.excerpt}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="textSecondary">
                      {post.date}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < posts.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}

export default Posts;
