import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const LoginPage = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      spacing={0}
      direction='column'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item className='box-shadow' xs={3} sx={{backgroundColor: 'white', padding: 3, borderRadius: 3}}>
        <Typography variant='h5' sx={{mb: 1}}>Login</Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Email" type="email" placeholder='correo@correo.com' fullWidth /> 
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Password" type="password" placeholder='Your Password' fullWidth /> 
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default LoginPage