import { TextField } from '@mui/material'
import React from 'react'

const InputEmail = () => {
    return (
        <>
            <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label="Email Address"
                name='email'
                autoFocus
            />
        </>
    )
}

export default InputEmail
