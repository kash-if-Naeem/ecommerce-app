import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import itemData from './CollectionData'
import Tooltip from '@mui/material/Tooltip';
import { cartActions } from '../../../store/cartSlice'
import { useDispatch } from 'react-redux'

const ImageGalleryList = styled('ul')(({ theme }) => ({
  display: 'grid',
  padding: 0,
  gap: 12,
  
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
}));

export default function TitlebarImageList() {
  const dispatch = useDispatch()
  const cartQuatityHandler = () => {
    dispatch(cartActions.addItemToCart({
    }))
  }

  return (
    <ImageGalleryList >

      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{'&:hover': {transform: "scale3d(1.05, 1.05, 1)"}, cursor:'pointer'}}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.price}
            actionIcon={
              <Tooltip title="Add to Cart" arrow>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={cartQuatityHandler}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Tooltip>
            }
          />
        </ImageListItem>
      ))}
    </ImageGalleryList>
  );
}

