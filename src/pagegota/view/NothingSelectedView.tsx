import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems={'center'}
      sx={{ minHeight: 'calc(100vh - 100px)', backgroundColor: 'primary.main' , borderRadius:3 }}
    >

      <Grid item xs={12}>
        <StarOutline sx={{fontSize:100, color:'#039be5'}}/>
      </Grid>
      <Grid>
        <Typography color={'#039be5'} variant="h5"  > Seleciona o crea un usuario</Typography>
      </Grid>
      </Grid>
      
  )
}
