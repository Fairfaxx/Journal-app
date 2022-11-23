import { AddOutlined, MailOutline } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { positions } from '@mui/system';
import React from 'react';
import JournalLayout from '../layout/JournalLayout';
import NoteView from '../views/NoteView';
import NothingSelectedView from '../views/NothingSelectedView';

const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.5 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
