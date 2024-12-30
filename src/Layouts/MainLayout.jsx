import AddIcon from '@mui/icons-material/Add';
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AppHeader } from '../Components/Header/Header';

function MainLayout(props) {
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
                >
                    <StarOutlinedIcon />
                </IconButton>
                {/* <IconButton
                    color="primary"
                    aria-label="add"
                    sx={{
                        backgroundColor: '#000', // Primary color (or customize it)
                        color: '#fff', // Icon color
                        width: 24, // Adjust size for roundness
                        height: 24,
                        borderRadius: '50%', // Makes it circular
                        '&:hover': {
                        //   backgroundColor: '#115293', // Darker shade on hover
                        },
                    }}
                >
                    <AddIcon />
                </IconButton> */}
            </div>
        </div>
    </Drawer>
    <div className='main-content-container'>
        <AppHeader/>
        {props.children}

    </div>

  </div>
    );
}

export default MainLayout;