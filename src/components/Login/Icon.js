import LockOutlined from '@mui/icons-material/LockOutlined'
import { Avatar } from '@mui/material'
import React from 'react'

export const Icon = () => {
    return (
        <>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
                <LockOutlined />
            </Avatar>
        </>
    )
}
