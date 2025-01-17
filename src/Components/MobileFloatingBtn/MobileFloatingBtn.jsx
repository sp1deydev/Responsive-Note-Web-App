import AddIcon from '@mui/icons-material/Add';
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Box, Fab, Zoom } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddNewNoteModal from '../AddNewNoteModal/AddNewNoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { noteSlice } from '../../Redux/noteSlice';

function MobileFloatingBtn() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMarked, setIsMarked] = useState(false)
  const search = useSelector(state => state.note.filterInfo.search)
  const allNotes = useSelector(state => state.note.allNotes)
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMarked(false);
  }, [allNotes])

  const handleAddNewClick = () => {
      setModalOpen(true);
      setOpen(false);
  };
  const handleFinishAddNew = () => {
      setModalOpen(false);
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleFilterNotes = () => {
      dispatch(noteSlice.actions.loadFilterData({marked: !isMarked, search: search}))
      setIsMarked(!isMarked);
  }

  return (
    <Box
      className="mobile-floating-btn"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* First additional button */}
      <Zoom in={open}>
        <Fab
          size="small"
          aria-label="edit"
          sx={{
            mb: 1,
            backgroundColor: '#000',
            color: '#fff',
            width: 40,
            height: 40,
            borderRadius: '50%',
            "&:hover": {
              backgroundColor: "#4C585B",
            },
          }}
          onClick={handleAddNewClick}
        >
          <AddIcon />
        </Fab>
      </Zoom>

      {/* Second additional button */}
      <Zoom in={open}>
        <Fab
          size="small"
          aria-label="delete"
          sx={{
            mb: 1,
            backgroundColor: "#000",
            color: "#FFC145",
            width: 40,
            height: 40,
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "#4C585B",
            },
          }}
          onClick={handleFilterNotes}
        >
          <StarOutlinedIcon />
        </Fab>
      </Zoom>

      {/* Main FAB */}
      <Fab
        aria-label="add"
        onClick={handleToggle}
        sx={{
          backgroundColor: "#000", // Black background
          color: "#fff", // White icon color
          "&:hover": {
            backgroundColor: "#4C585B", // Darker hover effect
          },
        }}
      >
        <AddIcon />
      </Fab>
      <AddNewNoteModal isModalOpen={isModalOpen} onAddNew={handleFinishAddNew} />
    </Box>
  );
}

export default MobileFloatingBtn;
