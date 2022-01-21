import React from 'react';
import HeroImg from './HeroImg';
import TitlebarGridList from './Collections'
import { Typography } from '@mui/material';

const Body = () => {
    return (
        <>
            <HeroImg />
            <Typography variant="h4" mt={4} sx={{
                mx: 'auto',
                width: 200,
            }}
            >
                Collections
            </Typography>
            <TitlebarGridList />
        </>
    )
};

export default Body;
