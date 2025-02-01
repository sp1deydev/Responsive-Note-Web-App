import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import SnackBarNotification from "../SnackBarNotification/SnackBarNotification";
import { useDispatch } from "react-redux";
import { noteSlice } from "../../Redux/noteSlice";
import { useTranslation } from "react-i18next";
import { checkNull } from "../../Common/checkNull";

function EditNoteModal(props) {
  const {t} = useTranslation();
  const { note, isModalOpen, onFinishEdit } = props;
  const [editedContent, setEditedContent] = useState(note.content);
  const [borderColor, setBorderColor] = useState("gray");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setEditedContent(note.content);
    setBorderColor('gray')
    onFinishEdit();
  };

  const handleSave = () => {
    if(!checkNull(editedContent)) {
          setBorderColor('red')
          return;
    }
    dispatch(noteSlice.actions.edit({id: note.id, content: editedContent}))
    dispatch(noteSlice.actions.loadFilterData({}))
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
          className="note-modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
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
            placeholder={t('notePlaceholder')}
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={editedContent}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: borderColor, // Default border color
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
        message={t('editSuccess')}
        onFinish={handleCloseSnackBar}
      />
    </div>
  );
}

export default EditNoteModal;
