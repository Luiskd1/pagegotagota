import { Apple} from '@mui/icons-material';

import { Button, Divider, Grid, Link as MuiLink, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
  return (

    <AuthLayout title='Iniciar Sesion'>
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Correo' 
              type='email' 
              placeholder='correo@google.com'
              fullWidth/>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Contraseña' 
              type='password' 
              placeholder='Contraseña'
              fullWidth/>
            </Grid>
            <Grid container direction={'row'} justifyContent={'end'}>
              
              <MuiLink 
              component={RouterLink} 
              to="/auth/register" 
              color="inherit"
              sx={{ml:1}}
              >
                Recuperar Contraseña
              </MuiLink>
            </Grid> 

            <Grid container spacing={2} sx={{mt:0.5, mb:2}}>
              <Grid item xs={12} sm={12}>
              <Button  fullWidth>
              <Typography> Login </Typography>
              </Button>
              </Grid>

              <Divider 
              sx={{mt:2}}
              style={{ width: "100%"}}>
              <span>o</span>
              </Divider>

              <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
              <img
               width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/google-logo.png"
              alt="google-logo"
               /> 
                <Typography sx={{ml:1, textTransform:'none'}}>Iniciar sesion con Google</Typography>
              </Button>
              </Grid > 

              <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Apple/> 
                <Typography sx={{ml:1 ,textTransform:'none'}}>Iniciar sesion con Apple</Typography>
              </Button>
              </Grid>
            </Grid>

            <Grid container direction={'row'} justifyContent={'end'}>
              
              No tienes una cuenta? 
              <MuiLink 
              component={RouterLink} 
              to="/auth/register" 
              color="inherit"
              sx={{ml:1}}
              >
                Regístrate
              </MuiLink>
            </Grid>
          </Grid>

       </form>
    </AuthLayout>

       


  )
}
