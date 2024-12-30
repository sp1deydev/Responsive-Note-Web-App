import React, { useState } from 'react';
import { Fab, Zoom, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function MobileFloatingBtn() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

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
        >
          <EditIcon />
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
    </Box>
  );
}

export default MobileFloatingBtn;
