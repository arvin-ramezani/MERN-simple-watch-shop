import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { Title, ImageWrapper, Image, StyledButton } from './styles';
import MensCategoryCover from '../../assets/images/category-cover/mens-category-cover.svg';
import WomensCategoryCover from '../../assets/images/category-cover/womens-category-cover.svg';
import SportCategoryCover from '../../assets/images/category-cover/sport-category-cover.svg';

const Categories: FC = () => {
  return (
    <>
      <Title
        align='center'
        mt={4}
        variant='h4'
      >
        Categories:
        <Link to='/products'>SEE ALL</Link>
      </Title>
      <Grid
        justifyContent='center'
        container
        my={1}
        spacing={3}
        px={3}
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
        >
          <Link to={`/products/mens`}>
            <ImageWrapper>
              <StyledButton variant='text'>By For Him</StyledButton>
              <Image
                src={MensCategoryCover}
                alt='mens'
              />
            </ImageWrapper>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
        >
          <Link to={`/products/womens`}>
            <ImageWrapper>
              <Image
                src={WomensCategoryCover}
                alt='womens'
              />
              <StyledButton variant='text'>By For Her</StyledButton>
            </ImageWrapper>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          padding={'7rem 0'}
        >
          <Link to={`/products/mens`}>
            <ImageWrapper>
              <Image
                src={SportCategoryCover}
                alt='sports'
              />
              <StyledButton variant='text'>Sport Watches</StyledButton>
            </ImageWrapper>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Categories;
