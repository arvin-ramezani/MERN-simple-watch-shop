import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const FilterBlock = styled('div')(({ theme }) => ({
  marginTop: '85px',
  background: '#23a5f0',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '1.6rem 0',

  [theme.breakpoints.up('lg')]: {
    marginTop: '110px',
  },
}));

export const LinkStyles = {
  textDecoration: 'none',
  color: 'inherit',
};

export const ProductsWrapper = styled(Grid)(({ theme }) => ({
  background: theme.palette.divider,
}));
