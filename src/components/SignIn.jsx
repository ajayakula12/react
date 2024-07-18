import React, { useEffect } from 'react';
import { Grid, Paper, Typography, TextField, Button, Link, Box, Divider, ThemeProvider, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';

import { useReducer } from 'react';
import formReducer from './formReducer';
import { validateUser } from '../services/validateUser';

import { useDispatch } from 'react-redux';
import { signinAction } from '../redux/actions/actions';


// Create a theme instance
const theme = createTheme();


const StyledGrid = styled(Grid)(({ theme }) => ({
  height: '100vh',
}));

const StyledImageGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',







  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
}));

const StyledAvatar = styled(LockOutlinedIcon)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  borderRadius: theme.spacing(2),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));
const initialState = {
  username: '',
  email: '',
  password: '',
};
 export function SignUp()  {
  const reduxDispatch=useDispatch();
   const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleUsernameChange = (e) => {
    dispatch({ type: 'SET_USER', Username: e.target.value });
  }
  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', Password: e.target.value });

  }
  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', email: e.target.value });
  }
  
  const   handleSubmit = async(e) => {

    e.preventDefault();
   
    const  response = await validateUser(formData.email, formData.password);
    console.log('response',response);
    //
    reduxDispatch(signinAction(response.userMenuItemsRestDTO.userObject.userName));


    
    

    
  };



  return (
    <Box component="div"  >
      <ThemeProvider theme={theme} >
        <StyledGrid container component="main">
          <StyledImageGrid item xs={false} sm={4} md={7} />
          <Grid item xs={12} sm={8} md={5} component={StyledPaper} elevation={6} square>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4, borderRadius: 2, boxShadow: 5 }}>
              <StyledAvatar fontSize="large" />
              <Typography component="h1" variant="h5">
                LOG IN
              </Typography>
              <StyledForm onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={handleUsernameChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                />

                <StyledSubmitButton type="submit" fullWidth variant="contained" color="primary">
                  LOGIN
                </StyledSubmitButton>
                <StyledDivider />
                <Grid container justifyContent="flex-end">
                  <Grid item>

                  </Grid>
                </Grid>
              </StyledForm>
            </Box>
          </Grid>
        </StyledGrid>
      </ThemeProvider>


    </Box>
  );
};

export default SignUp;
