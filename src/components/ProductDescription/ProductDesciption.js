import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

const ProductDesciption = () => {
    const productDescriptionItems = useSelector(state => state.description.items)

    return (
        <Card>
            {productDescriptionItems.map(item => (
                
                <CardActionArea key={item.id}>
                    <CardMedia
                        component="img"
                        height='700px'
                        image={item.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            ))}

        </Card>
    )
};

export default ProductDesciption;
