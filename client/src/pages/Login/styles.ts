import { Button } from '@mui/material';
import { styled } from '@mui/system';

import BackgroundImage from '../../assets/images/background/register.jpg';
import MobileBackgroundImage from '../../assets/images/background/mobile.jpg';

export const Background = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  background: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${BackgroundImage}) no-repeat fixed center`,
  // background: `linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${BackgroundImage}) no-repeat fixed center`,
  backgroundSize: 'cover',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    // background: `linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${BackgroundImage}) no-repeat fixed center`,
    background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${MobileBackgroundImage}) no-repeat fixed center`,
  },
}));

export const RegisterContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex',
  flexDirection: 'column',
  maxWidth: '530px',
  // margin: "auto auto auto 20rem",
  padding: '1rem',
  backgroundColor: '#e4ecee',

  [theme.breakpoints.down('sm')]: {
    margin: 'auto',
    maxWidth: '280px',
  },
  [theme.breakpoints.up('sm')]: {
    margin: 'auto',
    '& .MuiFormControl-fullWidth': {
      width: '40%',
    },
  },

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '8rem',
    top: '40%',
    transform: 'translateY(-50%)',
    maxWidth: '600px',
  },
}));

export const GoBack = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: '.5rem',
  top: '1rem',
  alignItems: 'center',

  '&:hover': {
    color: 'white',

    '& a': {
      color: 'white',
    },
  },

  '& a': {
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
}));

export const Form = styled('form')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '760px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },

  '& .MuiOutlinedInput-root': {
    background: '#e8f0fe',
  },
}));

export const PasswordHelperText = styled('div')(({ theme }) => ({
  color: '#d32f2f',
  fontSize: '.8rem',
  marginTop: theme.spacing(1),
}));

export const SubmitButton = styled('button')(({ theme }) => ({
  border: 'none',
  padding: '.8rem 2.4rem',
  marginTop: '2rem',
  backgroundColor: '#12213e',
  color: '#fff',
  cursor: 'pointer',
  width: '50%',
  fontSize: '1rem',
  fontWeight: 'bold',
  letterSpacing: '1px',

  [theme.breakpoints.up('sm')]: {
    marginTop: 0,
  },
}));
