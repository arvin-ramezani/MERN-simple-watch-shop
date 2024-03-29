import { styled } from '@mui/system';
import { Button, Dialog } from '@mui/material';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  paddingLeft: 0,
  position: 'relative',
  marginBottom: theme.spacing(2),
  backgroundColor: '#fff',
  borderRadius: '5px',

  '& .MuiButton-root:hover': {
    color: '#fff',
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export const ProductWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const ProductImage = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '220px',
  flex: 2,
  minWidth: '150px',
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));

export const ProductDetails = styled('div')(({ theme }) => ({
  margin: '1rem auto',
  marginLeft: theme.spacing(3),

  '& div:not(:last-child)': {
    marginBottom: '1rem',
  },

  [theme.breakpoints.up('md')]: {
    width: '200px',
  },
}));

export const Desc = styled('div')(({ theme }) => ({
  fontSize: '.9rem',
  textIndent: '.4rem',
  marginTop: '.4rem',
}));

export const ProductAmount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  alignSelf: 'center',

  '& .MuiIconButton-root:hover': {
    color: '#fff',
  },
}));

export const EditCartBlock = styled('div')(({ theme }) => ({
  padding: '0.5rem',

  '& .MuiIconButton-root': {
    width: '30%',
    height: 'auto',
  },

  '& .MuiIconButton-root:focus': {
    color: '#000',
  },

  [theme.breakpoints.up('md')]: {
    '& .MuiIconButton-root': {
      width: 'auto',
    },

    // '& .MuiIconButton-root:hover': {
    //   color: '#fff',
    // },
  },
}));

export const ProductPrice = styled('h6')(({ theme }) => ({
  fontSize: '1.4rem',
}));

export const editModeStyles = {
  border: '1px solid',
  borderRadius: '3px',
  padding: '0.2rem',
  opacity: '0.6',
};

export const EditCart = styled(Button)(({ theme }) => ({
  alignSelf: 'end',
  marginLeft: '0.5rem',
}));

export const RemoveButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: '1rem',
  top: '1rem',
}));

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiButton-root:hover': {
    color: '#fff',
  },
}));
