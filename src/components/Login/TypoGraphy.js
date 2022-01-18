import { Typography } from '@mui/material'
import React from 'react'

const TypoGraphy = (props) => {
    return (
        <>
            <Typography
                component='h1'
                variant='h5'
                sx={{ m: 1 }}
            >
                {props.text}
            </Typography>
        </>
    )
}

export default TypoGraphy
