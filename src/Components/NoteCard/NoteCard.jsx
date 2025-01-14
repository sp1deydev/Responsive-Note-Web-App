import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import EditNoteModal from "../EditNoteModal/EditNoteModal";
import { useDispatch } from "react-redux";
import { noteSlice } from "../../Redux/noteSlice";

function NoteCard(props) {
  const { note } = props; // onUpdateNote is a callback to update the note
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setModalOpen(true);
  };
  const handleFinishEdit = () => {
    setModalOpen(false);
  };
  const handleToggleMark = () => {
    dispatch(noteSlice.actions.toggleMark(note.id))
  }
  const handleDelete = () => {
    dispatch(noteSlice.actions.delete(note.id))
  }

  return (
    <>
      <Paper className="home-list__card-box" elevation={2}>
        <div className="home-list_card-textbox">{note.content}</div>
        <div className="home-list-card-footer">
          <div className="home-list-card-footer-date">{note.date}</div>
          <div className="home-list-card-group-btn">
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "#000",
                color: note.isMarked ? "#FFC145" : "#fff",
                width: 32,
                height: 32,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#4C585B",
                },
              }}
              onClick={handleToggleMark}
            >
              <StarOutlinedIcon />
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
              onClick={handleEditClick}
            >
              <EditOutlinedIcon />
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
              onClick={handleDelete}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Paper>

      {/* Edit Modal */}
      <EditNoteModal isModalOpen={isModalOpen} note={note} onFinishEdit={handleFinishEdit}/>
    </>
  );
}

export default NoteCard;
