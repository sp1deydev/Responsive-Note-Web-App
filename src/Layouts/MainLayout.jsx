import AddIcon from '@mui/icons-material/Add';
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { AppHeader } from './Header/Header';
import AddNewNoteModal from '../Components/AddNewNoteModal/AddNewNoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { noteSlice } from '../Redux/noteSlice';

function MainLayout(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isMarked, setIsMarked] = useState(false)
    const search = useSelector(state => state.note.filterInfo.search)
    const allNotes = useSelector(state => state.note.allNotes)
    useEffect(() => {
        setIsMarked(false);
    }, [allNotes])

    const dispatch = useDispatch();

    const handleAddNewClick = () => {
        setModalOpen(true);
    };
    const handleFinishAddNew = () => {
        setModalOpen(false);
    };
    const handleFilterNotes = () => {
        dispatch(noteSlice.actions.loadFilterData({marked: !isMarked, search: search}))
        setIsMarked(!isMarked);
    }
    return (
    <div style={{display:' flex'}}>
    <Drawer
      variant="permanent"
      className='side-bar-drawer'
      sx={{
        width: 120,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 120, },
      }}
    >
        <div className='nav-bar-container'>
            <div className='nav-bar__app-text'>
                <Typography variant="h6" sx={{fontWeight:'600'}}>Spidey</Typography>
            </div>
            <div className='nav-bar-list-container'>
                <IconButton
                    color="primary"
                    aria-label="add"
                    sx={{
                        backgroundColor: '#000', // Primary color (or customize it)
                        color: '#fff', // Icon color
                        width: 40, // Adjust size for roundness
                        height: 40,
                        borderRadius: '50%', // Makes it circular
                        '&:hover': {
                        //   backgroundColor: '#115293', // Darker shade on hover
                        color: '#000'
                        },
                    }}
                    onClick={handleAddNewClick}
                >
                    <AddIcon />
                </IconButton>
                <IconButton
                    color="primary"
                    aria-label="add"
                    sx={{
                    backgroundColor: "#000", // Primary color (or customize it)
                    color: "#FFC145", // Icon color
                    width: 40, // Adjust size for roundness
                    height: 40,
                    borderRadius: "50%", // Makes it circular
                    "&:hover": {
                        backgroundColor: "#4C585B", // Darker shade on hover
                    },
                    }}
                    onClick={handleFilterNotes}
                >
                    <StarOutlinedIcon />
                </IconButton>
            </div>
        </div>
    </Drawer>
    <div className='main-content-container'>
        <AppHeader/>
        {props.children}

    </div>
    <AddNewNoteModal isModalOpen={isModalOpen} onAddNew={handleFinishAddNew} />
  </div>
    );
}

export default MainLayout;