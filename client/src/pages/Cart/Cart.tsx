import { Button, Typography } from "@mui/material";
import {
  CartContainer,
  CartTop,
  CartTopLinks,
  CheckoutButton,
  Wrapper,
  CartListContainer,
  SummaryContainer,
  SummaryButton,
} from "./styles";
import { Box } from "@mui/system";
import React, { FC } from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CartItem from "../../component/CartItem/CartItem";
import { selectCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { API } from "../../Api/tokenApi";
import { selectUser } from "../../features/user/userSlice";

const Cart: FC = () => {
  const { cartProducts, cartQuantity } = useSelector(selectCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const user = useSelector(selectUser);

  const checkoutHandler = async () => {
    try {
      if (user) {
        const res = await API.post("/", "", {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <CartContainer>
        <Typography variant="h4" align="center">
          Your Bag
        </Typography>
        <CartTop>
          <Button size="small" color="inherit" variant="outlined">
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <CartTopLinks>
            <Button variant="text">Shopping Bag (2)</Button>
            <Button variant="text">Your Wishlist (0)</Button>
          </CartTopLinks>
          <CheckoutButton size="small" variant="contained">
            Checkout Now
          </CheckoutButton>
        </CartTop>
        {!cartQuantity ? (
          <Typography variant="h4" align="center" color="darkred" mt={5}>
            Your Cart Is Empty
          </Typography>
        ) : (
          <Wrapper>
            <CartListContainer>
              {cartProducts.map((product) => (
                <CartItem
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  qty={product.productQuantity}
                  img={product.img}
                  desc={product.desc}
                  price={product.price}
                />
              ))}
            </CartListContainer>

            <SummaryContainer>
              <Typography variant="h5" align="center" mb={2}>
                ORDER SUMMARY
              </Typography>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Subtotal</Typography>
                <Typography>$ {totalPrice}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Estimated Shipping</Typography>
                <Typography>$5.90</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Shipping Discount</Typography>
                <Typography>$-5.90</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">{totalPrice}</Typography>
              </Box>

              <SummaryButton
                onClick={checkoutHandler}
                fullWidth
                variant="contained"
              >
                Checkout Now
              </SummaryButton>
            </SummaryContainer>
          </Wrapper>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
