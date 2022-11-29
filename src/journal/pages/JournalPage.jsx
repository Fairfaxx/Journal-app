import { AddOutlined, MailOutline } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { positions } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savingNewNote } from '../../store/journal/journalSlice';
import { startNewNote } from '../../store/journal/thunks';
import JournalLayout from '../layout/JournalLayout';
import NoteView from '../views/NoteView';
import NothingSelectedView from '../views/NothingSelectedView';

const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.5 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        disabled={!!isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
