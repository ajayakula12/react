
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const About=()=>{
    const plans = [
        { id: 1, name: 'Basic Plan', price: '$10/month', description: 'Includes 1GB data' },
        { id: 2, name: 'Standard Plan', price: '$20/month', description: 'Includes 5GB data' },
        { id: 3, name: 'Premium Plan', price: '$30/month', description: 'Includes 10GB data' },
        { id: 4, name: 'Unlimited Plan', price: '$50/month', description: 'Unlimited data' },
        { id: 5, name: 'postPaid Plan', price: '$150/month', description: 'postPaid Plan' },
      ];
    return(
        <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} >
          {plans.map((plan) => (
            <Grid item key={plan.id} xs={12} sm={6} md={3} textAlign='center'>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Select Plan
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
        
    );
}   

export {About}