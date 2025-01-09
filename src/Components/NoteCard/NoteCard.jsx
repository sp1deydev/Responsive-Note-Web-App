import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import React from 'react';

function NoteCard(props) {
    const {note} = props;
    console.log(note);
    return (
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            {note.content}
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">{note.date}</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: note.isMarked ? "#FFC145" : "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
    );
}

export default NoteCard;