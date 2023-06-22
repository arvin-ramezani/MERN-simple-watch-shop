import React, { FC, useState } from 'react';
import { AddSharp, RemoveSharp } from '@mui/icons-material';
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import {
  Desc,
  Wrapper,
  ProductWrapper,
  ProductImage,
  Image,
  ProductAmount,
  ProductDetails,
  ProductPrice,
  EditCart,
  RemoveButton,
  editModeStyles,
} from './styles';
import { editCartItem, removeFromCart } from '../../features/cart/cartSlice';
import { ICartItemProps } from '../../interfaces/interfaces';

const CartItem: FC<ICartItemProps> = ({ img, _id, price, name, desc, qty }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(qty);
  const [isEdit, setIsEdit] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);

  const quantityHandler = (type: string) => {
    if (type === 'inc') {
      setQuantity((quantity) => quantity + 1);
    }
    if (type === 'dec') {
      quantity > 1 && setQuantity((quantity) => quantity - 1);
    }
  };

  const handleOpenRemoveModal = () => setOpenRemoveModal(true);

  const handleRemoveItem = (type: string) => {
    if (type === 'cancel') {
      setOpenRemoveModal(false);
    } else {
      dispatch(removeFromCart(_id));
    }
  };

  const handleEdit = (type: string) => {
    if (type === 'cancel') {
      setIsEdit(false);
      console.log('can', type, isEdit);
    } else if (type === 'edit' && isEdit) {
      dispatch(editCartItem({ _id, quantity }));
      setIsEdit((prev) => !prev);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <Wrapper>
      <ProductWrapper>
        <ProductImage>
          <Image
            src={img}
            alt={name}
          />
        </ProductImage>
        <ProductDetails>
          <Typography
            sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            variant='h6'
          >
            {name}
          </Typography>
          <Desc sx={{ wordBreak: 'break-word' }}>{desc}</Desc>
        </ProductDetails>
      </ProductWrapper>
      <ProductAmount>
        <div>
          <ProductPrice style={isEdit ? editModeStyles : {}}>
            ${isEdit ? `${quantity * price}` : `${qty * price}`}
          </ProductPrice>
          <IconButton
            disabled={!isEdit}
            onClick={() => quantityHandler('dec')}
          >
            <RemoveSharp />
          </IconButton>
          <Chip
            label={isEdit ? quantity : qty}
            variant='outlined'
          />
          <IconButton
            disabled={!isEdit}
            onClick={() => quantityHandler('inc')}
          >
            <AddSharp />
          </IconButton>
        </div>
        <EditCart
          onClick={() => handleEdit('edit')}
          variant={isEdit ? 'contained' : 'outlined'}
        >
          {isEdit ? 'Ok' : 'Edit'}
        </EditCart>
        {isEdit ? (
          <EditCart
            onClick={() => handleEdit('cancel')}
            variant='contained'
            color='warning'
          >
            Cancel
          </EditCart>
        ) : null}
      </ProductAmount>
      <RemoveButton
        onClick={handleOpenRemoveModal}
        variant='outlined'
        color='warning'
      >
        Remove
      </RemoveButton>
      <Dialog
        open={openRemoveModal}
        onClose={handleRemoveItem}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Are You Sure ?</DialogTitle>
        <DialogActions>
          <Button
            color='warning'
            onClick={() => handleRemoveItem('cancel')}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveItem('remove')}
            autoFocus
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default CartItem;
