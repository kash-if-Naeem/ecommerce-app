import React from 'react';
import { useDispatch } from 'react-redux';
import { Card } from './Card'
import { Icon } from './Icon'
import TypoGraphy from './TypoGraphy'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'
import { MyButton } from './MyButton'
import { Box } from '@mui/material'
import { authActions } from '../../store/loginSlice'
import configData from '../../config.json'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const dispatch = useDispatch()

    const email = configData.email
    const password = configData.password

    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        if (data.get('email') === email && data.get('password') === password) {
            dispatch(authActions.login())
            // console.log('authenticated');
             navigate('/dashboard')
        } else {
            alert('wrong password/email')
        }
        
    }
 
    return (
        <>
            <Card>
                <Icon />
                <TypoGraphy text='Sign In' />
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <InputEmail />
                    <InputPassword />
                    <MyButton text='Sign In' />
                </Box>
            </Card>

        </>
    )
}

export default Login
