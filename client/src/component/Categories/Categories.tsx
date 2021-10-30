import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Title, ImageWrapper, Image, StyledButton } from "./styles";
import { Link } from "react-router-dom";

const Categories: FC = () => {
  return (
    <>
      <Title align="center" mt={4} variant="h4">
        Categories:
        <Link to="/products">SEE ALL</Link>
      </Title>
      <Grid justifyContent="center" container my={1} spacing={3} px={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={`/products/mens`}>
            <ImageWrapper>
              <StyledButton variant="text">By For Him</StyledButton>
              <Image
                src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="mens"
              />
            </ImageWrapper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={`/products/womens`}>
            <ImageWrapper>
              <Image
                src="https://res.cloudinary.com/webstore/image/fetch/w_500,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB15EpCPcfpK1RjSZFOq6y6nFXa5%2FWoMaGe-Top-Brand-Fashion-Women-s-Watches-Luxury-Women-Slim-Watch-High-Quality-Ladies-Watch-Clock.jpg"
                alt="womens"
              />
              <StyledButton variant="text">By For Her</StyledButton>
            </ImageWrapper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Link to={`/products/mens`}>
            <ImageWrapper>
              <Image
                src="https://img.joomcdn.net/9d128b6c874d1f6060fbe434adf1ab9d9c6e0f00_original.jpeg"
                alt="sports"
              />
              <StyledButton variant="text">Sport Watches</StyledButton>
            </ImageWrapper>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Categories;
