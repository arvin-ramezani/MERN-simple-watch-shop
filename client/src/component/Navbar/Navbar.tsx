import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  LogoWrapper,
  linkStyle,
  LoginWrapper,
  LoginMenu,
  ShoppingCart,
} from "./styles";
import LogoImage from "../../images/logo/logo-change-background.jpg";
import { Badge, Container, Menu, MenuItem } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser, selectUser } from "../../features/user/userSlice";
import { persistor } from "../../app/store";
import { selectCart } from "../../features/cart/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const { cartQuantity } = useSelector(selectCart);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    handleClose();
    history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#aac6fe" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoWrapper>
              <Link to="/">
                <img src={LogoImage} alt="Market Watch" />
              </Link>
            </LogoWrapper>
            <LoginWrapper>
              {user ? (
                <Button
                  onClick={handleLogout}
                  variant="contained"
                  size="small"
                  color="error"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link style={linkStyle} to="/login">
                    Login
                  </Link>
                  <Link style={linkStyle} to="/register" color="inherit">
                    Register
                  </Link>
                </>
              )}
            </LoginWrapper>
            <LoginMenu>
              <Button
                variant="outlined"
                color="primary"
                id="openLoginButton"
                onClick={handleClick}
              >
                Account
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {user ? (
                  <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleLogout}>
                    Logout
                  </MenuItem>
                ) : (
                  <div>
                    <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleClose}>
                      Login
                    </MenuItem>
                    <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleClose}>
                      Register
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </LoginMenu>
            <ShoppingCart size="large">
              <Link to="/cart">
                <Badge badgeContent={cartQuantity} color="success" showZero>
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </ShoppingCart>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
