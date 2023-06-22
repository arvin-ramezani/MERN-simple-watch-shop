import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const Container = styled(Grid)(({ theme }) => ({
  backgroundColor: '#002876',
  padding: '3rem 2rem',

  '& .MuiTypography-root': {
    color: '#fff',
  },
}));

export const AboutUs = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    // margin: "1rem 0 0 4rem",
    margin: '1rem auto',

    '& .MuiTypography-root': {
      maxWidth: '400px',
    },
  },
}));

export const Form = styled('form')(({ theme }) => ({
  width: '70%',
  background: '#a6c4ff',
  padding: '0.5rem 2rem',
  borderRadius: '10px',

  '& .MuiButton-root': {
    backgroundColor: '#002876',
  },
}));
