import React from 'react'
import { Button } from '@mui/material'

export const MyButton = (props) => {

    return (
        <>
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
            >
                {props.text}
            </Button>
        </>
    )
}
