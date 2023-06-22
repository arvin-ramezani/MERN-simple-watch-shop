import { Box, styled } from '@mui/system';
import { Button, Grid, Paper } from '@mui/material';

export const CartContainer = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(10)} ${theme.spacing(2)}`,
  maxWidth: '1400px',
  margin: '85px auto',

  [theme.breakpoints.up('lg')]: {
    margin: '110px auto',
  },
}));

export const CartTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),

  '& .MuiButton-root': {
    borderRadius: 0,
  },

  '& > button > a': {
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '1rem',
  },
}));

export const CartTopLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),

  '& .MuiButton-root': {
    textDecoration: 'underline',
    color: '#444242',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export const CheckoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',

  '&:focus, :hover': {
    backgroundColor: '#000',
    color: '#fff',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
  },
}));

export const CartListContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',

  margin: '3rem 0',

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    width: '75%',
  },
}));

export const SummaryContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '250px',
  height: 'fit-content',
  margin: '3rem auto 0',

  '& div': {
    marginBottom: theme.spacing(1.5),
  },
}));

export const SummaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',

  '&:focus, :hover': {
    backgroundColor: '#000',
    color: '#fff',
  },
}));
