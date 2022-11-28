import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

const CheckingAuth = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={0}
      direction="column"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};

export default CheckingAuth;
