import { MailOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import JournalLayout from '../layout/JournalLayout';
import NoteView from '../views/NoteView';
import NothingSelectedView from '../views/NothingSelectedView';

const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};

export default JournalPage;
