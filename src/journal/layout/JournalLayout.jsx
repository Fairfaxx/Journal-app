import { Box } from '@mui/system';
import React from 'react';

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar here */}

      {/* SideBar */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
