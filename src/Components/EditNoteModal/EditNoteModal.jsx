import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import SnackBarNotification from "../SnackBarNotification/SnackBarNotification";

function EditNoteModal(props) {
  const { note, isModalOpen, onFinishEdit } = props;
  const [editedContent, setEditedContent] = useState(note.content);
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    onFinishEdit();
  };

  const handleSave = () => {
    setOpen(true);
    onFinishEdit();
  };

  const handleCloseSnackBar = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };
  return (
    <div>
      <Modal open={isModalOpen} onClose={handleCancel}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          {/* <Typography variant="h5" sx={{fontWeight:'600'}}>
            {t('notes')}
            Edit note
          </Typography> */}
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={editedContent}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#000", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000", // Border color on focus
                },
              },
            }}
          />
          <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid #000",
                "&:hover": {
                  backgroundColor: "#2412",
                  borderColor: "#fff",
                },
              }}
              onClick={handleCancel}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                width: 32,
                height: 32,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#4C585B",
                },
              }}
              onClick={handleSave}
            >
              <CheckIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
      <SnackBarNotification
        open={open}
        message="Save change successfully!"
        onFinish={handleCloseSnackBar}
      />
    </div>
  );
}

export default EditNoteModal;
