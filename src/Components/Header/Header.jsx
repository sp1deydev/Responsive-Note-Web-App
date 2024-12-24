import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export function AppHeader() {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };

  return (
    <div className='app-header-container'>
        <div className='app-header__searchbox'>
            <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="outlined"
            placeholder="Search..."
            fullWidth
            sx={{
                maxWidth: '100%',
                '& .MuiOutlinedInput-root': {
                padding: '0', // Removes the padding inside the input
                border: 'none', // Removes the border
                },
                '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Removes the outline border
                },
            }}
            InputProps={{
                startAdornment: (
                <InputAdornment position="start" sx={{ padding: 0 }}>
                    <SearchIcon />
                </InputAdornment>
                ),
                endAdornment: value && (
                <InputAdornment position="end" sx={{ padding: 0 }}>
                    <IconButton onClick={handleClear} sx={{ padding: 0 }}>
                    <ClearIcon />
                    </IconButton>
                </InputAdornment>
                ),
            }}
            />
        </div>
        <div className='app-header__group-btn'>
            <IconButton
                color="primary"
                aria-label="add"
                sx={{
                    backgroundColor: '#fff', // Primary color (or customize it)
                    color: '#000', // Icon color
                    width: 40, // Adjust size for roundness
                    height: 40,
                    borderRadius: '50%', // Makes it circular
                    '&:hover': {
                    //   backgroundColor: '#115293', // Darker shade on hover
                    },
                }}
            >
                <FileDownloadOutlinedIcon />
            </IconButton>
            <IconButton
                color="primary"
                aria-label="add"
                sx={{
                    backgroundColor: '#fff', // Primary color (or customize it)
                    color: '#000', // Icon color
                    width: 40, // Adjust size for roundness
                    height: 40,
                    borderRadius: '50%', // Makes it circular
                    '&:hover': {
                    //   backgroundColor: '#115293', // Darker shade on hover
                    },
                }}
            >
                <LanguageOutlinedIcon />
            </IconButton>
        </div>
    </div>
  );
}
