import { Button, Grid, TextField, Typography, Link as MuiLink } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from "react-router-dom";



export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
        <form action="">
          <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Nombre Completo' 
              type='text' 
              placeholder='Nombre Completo'
              fullWidth/>
            </Grid>
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

            <Grid container spacing={2} sx={{mt:0.5, mb:2}}>
              <Grid item xs={12} sm={12}>
              <Button variant='contained' fullWidth >
              <Typography sx={{ml:1, textTransform:'none'}}> Crear cuenta </Typography>
              </Button>
              </Grid>



            </Grid>

            <Grid container direction={'row'} justifyContent={'end'}>
              
              ¿Ya tienes una cuenta? 
              <MuiLink 
              component={RouterLink} 
              to="/auth/login" 
              color="inherit"
              sx={{ml:1}}
              >
                Inicia Sesion
              </MuiLink>
            </Grid>
          </Grid>

       </form>

    </AuthLayout>
    
  )
}
