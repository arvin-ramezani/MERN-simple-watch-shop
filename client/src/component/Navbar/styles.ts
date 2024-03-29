import { Dialog, IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const LogoWrapper = styled('div')(({ theme }) => ({
  width: '170px',

  '& img': {
    width: '100%',
    height: 'auto',
  },

  [theme.breakpoints.up('lg')]: {
    width: '220px',
  },
}));

export const linkStyle = {
  border: '1px solid',
  textDecoration: 'none',
  padding: '4px 8px',
  borderRadius: '3px',
  color: 'rgb(0 15 255)',
  marginRight: '1rem',
};

export const menuLinkStyle = {
  textDecoration: 'none',
};

export const LoginWrapper = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const LoginMenu = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  color: '#fefefe',

  '& a': {
    textDecoration: 'none',
  },

  '& .MuiButton-root': {
    fontSize: '.6rem',
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const ShoppingCart = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(5),
  // color: theme.palette.grey[300],

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

  [theme.breakpoints.down('sm')]: {
    margin: '0',
  },

  '& a': {
    color: 'inherit',
  },

  '& .MuiSvgIcon-root': {
    color: '#001277',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2rem',
    },
  },
}));

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiButton-root:hover': {
    color: '#fff',
  },
}));
