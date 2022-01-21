import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../store/loginSlice'
import Tooltip from '@mui/material/Tooltip';
import { cartVisibilityActions } from '../../store/cartVisibilitySlice';
import Cart from './Cart'

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(authActions.logout())
    navigate('/')
  }

  const showCartHandler = () => {
    dispatch(cartVisibilityActions.toggle())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontFamily: 'Dancing Script' }}
          >
            Shopee
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box >
            <Tooltip title="Cart" arrow>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={showCartHandler}
              >
                <Badge badgeContent={17} color="error">
                  <Cart />
                </Badge>
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Logout" arrow>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={logoutHandler}
              >
                <LogoutIcon  />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
