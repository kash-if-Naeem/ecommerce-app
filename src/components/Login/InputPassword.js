import { TextField } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'

const InputPassword = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    let icon;
    if (showPassword) {
        icon = <VisibilityOutlinedIcon
            onClick={togglePassword}
            style={{ cursor: 'pointer' }} />
    } else {
        icon = <VisibilityOffIcon
            onClick={togglePassword}
            style={{ cursor: 'pointer' }} />
    }

    return (
        <>
            <TextField
                margin='normal'
                required
                fullWidth
                id='password'
                label="Password"
                name='password'
                autoFocus
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: icon
                }}
            />
        </>
    )
}

export default InputPassword
