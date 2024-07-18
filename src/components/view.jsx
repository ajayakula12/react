import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const CustomerView=()=>{
  const store=useSelector((state)=>state.userReducer)
  console.log(store);
    return(
        <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {/* Left side: Profile details */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              <Avatar alt="Profile Picture" src='images/defaultAvatar.jpg' sx={{ width: 50, height: 50 }} />
            </Box>
            <Typography variant="h6" gutterBottom>
             {store.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
             ajay.akula
            </Typography>
            <Typography variant="body2" color="text.secondary">
             HYD
            </Typography>
          </Paper>
        </Grid>

        {/* Right side: Wallet details */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Wallet Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              Remaining Amount: 100$
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last transaction: sucess
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Expiry date: 10/10/3030
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>

    )
}
export default CustomerView;