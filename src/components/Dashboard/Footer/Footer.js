import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
      <Box sx={{display:'flex', background:'#1976d2', flexDirection:'row', justifyContent: 'space-between', height:'5vh', color:'#fff'}}>
          <Typography sx={{margin:'10px'}}>
              Copyright &copy; 2021
          </Typography>
          <Typography sx={{margin:'10px'}} >
              Designed by <span style={{fontFamily: 'Dancing Script'}}>Kashif Naeem</span>
          </Typography>
      </Box>
  )
};

export default Footer;
