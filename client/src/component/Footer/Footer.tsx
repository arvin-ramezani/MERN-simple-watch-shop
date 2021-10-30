import React, { FC } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container, AboutUs, Form } from "./styles";

const Footer: FC = () => {
  return (
    <Container container justifyContent="space-between">
      <AboutUs item sm={5}>
        <Typography my={3} variant="h4">
          About Us
        </Typography>
        <Typography variant="body1">
          lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet,
          consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit
          amet, consect lorem ipsum dolor sit amet, consect
        </Typography>
      </AboutUs>
      <Grid item sm={5}>
        <Typography my={3} variant="h5">
          Contact Us
        </Typography>
        <Form>
          <TextField
            margin="dense"
            fullWidth
            variant="standard"
            placeholder="Your Name"
            label="Name"
          />
          <TextField
            margin="dense"
            fullWidth
            variant="standard"
            placeholder="example@exp.com"
            label="Email"
            type="email"
          />
          <TextField
            margin="dense"
            fullWidth
            variant="standard"
            placeholder="Message"
            label="Message"
            multiline
            rows="3"
          />
          <Button fullWidth variant="contained">
            Submit
          </Button>
        </Form>
      </Grid>
    </Container>
  );
};

export default Footer;
