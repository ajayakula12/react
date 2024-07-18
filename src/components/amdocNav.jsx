import '../styles/logo.css'
import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';



import Button from '@mui/material/Button';



const AmdocNav = () => {



  const handleSignUP = () => {
    console.log("siging in");
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" >
                <img src='images/logo-wordmark.png' alt='logo' />
              </Link>

            </Typography>
            <Link to="/plans" >
              Plans
            </Link>
            <Link to="/rewards" >
              Rewards
            </Link>
            <Link to="/view" >
              Customer View
            </Link>
            <Button
              sx={{
                backgroundColor: '#808080', // Grey background color
                color: 'white', // Text color
                '&:hover': {
                  backgroundColor: '#606060', // Darker grey on hover
                },
              }}
              variant="contained" onClick={handleSignUP}
              href="/login"
            >
              LOG IN
            </Button>
              


          </Toolbar>
        </AppBar>
      </Grid>

    </Grid>



  );
}
export { AmdocNav }