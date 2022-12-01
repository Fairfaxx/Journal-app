import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks/useForm';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote } from '../../store/journal/thunks';
import ImageGallery from '../components/ImageGallery';

const NoteView = () => {
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const { title, body, date, onInputChange, formState } = useForm(note);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    return () => {
      Swal.close();
    };
  }, [messageSaved]);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__faster"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          disabled={!!isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert a title here"
          label="Title here"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What's happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

export default NoteView;
