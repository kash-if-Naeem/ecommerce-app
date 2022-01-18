import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Card = (props) => {
    return (
        <>
            <Container maxWidth='xs'>
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    {props.children}
                </Box>
            </Container>
        </>
    )
}
