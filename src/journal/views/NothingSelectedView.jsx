import { StarOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const NothingSelectedView = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={0}
      direction="column"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid item className="box-shadow" xs={12}>
        <StarOutlined sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Select or Create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
