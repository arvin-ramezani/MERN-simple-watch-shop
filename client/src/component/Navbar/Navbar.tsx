import * as React from 'react';
import { useState } from 'react';
import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Badge, Container, Menu, MenuItem } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  LogoWrapper,
  linkStyle,
  LoginWrapper,
  LoginMenu,
  ShoppingCart,
  menuLinkStyle,
} from './styles';
import LogoImage from '../../assets/images/logo/logo-change-background.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, selectUser } from '../../features/user/userSlice';
import { persistor } from '../../app/store';
import { selectCart } from '../../features/cart/cartSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const { cartQuantity } = useSelector(selectCart);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    handleClose();
    history.push('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#aac6fe' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <LogoWrapper>
              <Link to='/'>
                <img
                  src={LogoImage}
                  alt='Market Watch'
                />
              </Link>
            </LogoWrapper>
            <LoginWrapper>
              {user ? (
                <Button
                  onClick={setShowLogoutModal.bind(null, true)}
                  variant='contained'
                  size='small'
                  color='error'
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link
                    style={linkStyle}
                    to='/login'
                  >
                    Login
                  </Link>
                  <Link
                    style={linkStyle}
                    to='/register'
                    color='inherit'
                  >
                    Register
                  </Link>
                </>
              )}
            </LoginWrapper>
            <LoginMenu>
              <Button
                variant='outlined'
                color='primary'
                id='openLoginButton'
                onClick={handleClick}
              >
                Account
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {user ? (
                  <MenuItem
                    sx={{ fontSize: '.8rem' }}
                    onClick={setShowLogoutModal.bind(null, true)}
                  >
                    Logout
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem
                      sx={{ fontSize: '.8rem' }}
                      onClick={handleClose}
                    >
                      <Link
                        style={menuLinkStyle}
                        color='inherit'
                        to='/login'
                      >
                        Login
                      </Link>
                    </MenuItem>
                    <MenuItem
                      sx={{ fontSize: '.8rem' }}
                      onClick={handleClose}
                    >
                      <Link
                        style={menuLinkStyle}
                        color='inherit'
                        to='/register'
                      >
                        Register
                      </Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </LoginMenu>
            <ShoppingCart size='large'>
              <Link to='/cart'>
                <Badge
                  badgeContent={cartQuantity}
                  color='success'
                  showZero
                >
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </ShoppingCart>
          </Toolbar>
          <Dialog
            open={showLogoutModal}
            onClose={() => setShowLogoutModal(false)}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>Are You Sure ?</DialogTitle>
            <DialogActions>
              <Button
                color='warning'
                onClick={setShowLogoutModal.bind(null, false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogout}
                autoFocus
              >
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </AppBar>
    </Box>
  );
}
