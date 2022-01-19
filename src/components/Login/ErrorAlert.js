import React from 'react'
import { Alert } from '@mui/material'

const ErrorAlert = (props) => {
    return (
        <Alert severity='error'>
            {props.text}
        </Alert>
    )
}

export default ErrorAlert
