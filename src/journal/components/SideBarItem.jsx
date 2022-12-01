import React, { useMemo } from 'react';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

const SideBarItem = ({
  title = '',
  body = '',
  id = '',
  date,
  imageUrls = [],
}) => {
  const dispatch = useDispatch();
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  const handleGetNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleGetNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
