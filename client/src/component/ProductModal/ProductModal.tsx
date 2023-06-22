import { Add, Cancel, Remove } from '@mui/icons-material';
import { Button, Chip, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VariantType, useSnackbar } from 'notistack';

import {
  Wrapper,
  CloseButton,
  Image,
  Info,
  Price,
  AddToCart,
  Quantity,
  Categories,
} from './styles';
import React, { FC, useState } from 'react';
import { RootState } from '../../app/store';
import { addToCart } from '../../features/cart/cartSlice';
import { IProductModalProps } from '../../interfaces/interfaces';

const ProductModal: FC<IProductModalProps> = ({
  setOpenModal,
  product: { img, name, desc, price, categories, _id },
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { enqueueSnackbar } = useSnackbar();

  const isCartInProduct = useSelector((state: RootState) =>
    state.cart.cartProducts.find((p) => p._id === _id)
  );

  const user = useSelector((state: RootState) => state.user.userInfo);

  const quantityHandler = (type: string) => {
    if (type === 'inc') {
      setQuantity((quantity) => quantity + 1);
    }
    if (type === 'dec') {
      quantity > 1 && setQuantity((quantity) => quantity - 1);
    }
  };

  const CloseModalHandler = () => setOpenModal(false);

  const addToCartHandler = (variant: VariantType) => {
    if (isCartInProduct) {
      enqueueSnackbar(
        `You Added This Product Before. Please Edit Quantity Or Remove ${user?.firstname}`,
        { variant: 'error' }
      );

      return;
    } else {
      dispatch(
        addToCart({
          productQuantity: quantity,
          img,
          name,
          desc,
          price,
          categories,
          _id,
          userId: user?.firstname,
        })
      );

      enqueueSnackbar(`Thanks For Shopping.. ${user?.firstname}`, { variant });
    }
  };

  return (
    <Wrapper>
      <CloseButton
        color='primary'
        onClick={CloseModalHandler}
      >
        <Cancel />
      </CloseButton>
      <Image src={img} />
      <Info>
        <h3>{name}</h3>
        <p>{desc}</p>
        <Price>${price}</Price>
        <Categories>
          Categories:
          <br />
          {categories?.map((cat) => (
            <span key={cat}>{cat} </span>
          ))}
        </Categories>
      </Info>
      <AddToCart>
        <Typography
          gutterBottom
          color='darkgreen'
          variant='subtitle1'
        >
          Total= {quantity * price}
        </Typography>
        <Quantity>
          <IconButton onClick={() => quantityHandler('dec')}>
            <Remove />
          </IconButton>
          <Chip
            sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            label={quantity}
            variant='outlined'
          />
          <IconButton onClick={() => quantityHandler('inc')}>
            <Add />
          </IconButton>
        </Quantity>
        <Button
          onClick={() => addToCartHandler('success')}
          disabled={!user}
          sx={{ marginTop: '1.4rem' }}
          variant='contained'
        >
          Add To Cart
        </Button>
        {!user && (
          <Link
            to='/login'
            style={{ marginTop: '1.4rem' }}
          >
            Please Login First
          </Link>
        )}
      </AddToCart>
    </Wrapper>
  );
};

export default ProductModal;
