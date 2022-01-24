import * as React from 'react';
import { Box, ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { cartActions } from '../../store/cartSlice';
import { cartVisibilityActions } from '../../store/cartVisibilitySlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const showCart = useSelector(state => state.cartVisibility.cartIsVisible)
  const cartItem = useSelector(state => state.cart.items)
  console.log({ showCart })

  const dispatch = useDispatch();
  const removeItemHandler = (value) => {
    dispatch(cartActions.removeItemFromCart(value.id));
  };

  const addItemHandler = (value) => {
    dispatch(
      cartActions.addItemToCart({
        id: value.id,
        title: value.title,
        price: value.price,
      })
    );
  };


  return (
    <div>
      <ShoppingCartOutlinedIcon />
      <Modal
        open={showCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component='h2' variant='h5'>
            My Shopping Cart
          </Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {cartItem.map((value) => (

              <ListItem
                key={value.id}
                disableGutters
                secondaryAction={`$${value.totalPrice} ($${value.price} / item)`}
              >
                <ListItemText primary={value.name} />
                <ListItemButton sx={{ position: 'fixed', left: '90%' }} onClick={() => addItemHandler(value)}>+</ListItemButton>
                <ListItemButton sx={{ position: 'fixed', right: '25%' }} onClick={() => removeItemHandler(value)}>-</ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Modal>
    </div>
  );
}
