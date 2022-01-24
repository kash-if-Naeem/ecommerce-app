import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from '../Dashboard/Navbar'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { cartActions } from '../../store/cartSlice';
import { useDispatch } from 'react-redux'

const ProductDesciption = () => {
    const productDescriptionItems = useSelector(state => state.description.items)

    const dispatch = useDispatch()
    const cartQuatityHandler = (item) => {
        dispatch(cartActions.addItemToCart({
            id: item.id,
            title: item.title,
            price: item.price
        }))
    }

    return (
        <>
            <Navbar />
            <Card sx={{}}>
                {productDescriptionItems.map(item => (

                    <CardActionArea key={item.id} style={{ display: {md: 'flex', lg: 'flex'} }}>
                        <CardMedia
                            component="img"
                            height='500px'
                            image={item.img}
                            alt="green iguana"
                        // sx={{flex:'33%'}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{}}>
                                {item.name}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <Tooltip title="Add to Cart" arrow>
                            <IconButton
                                onClick={() => cartQuatityHandler(item)}
                            >
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Tooltip>
                    </CardActionArea>
                ))}

            </Card>
        </>
    )
};

export default ProductDesciption;
