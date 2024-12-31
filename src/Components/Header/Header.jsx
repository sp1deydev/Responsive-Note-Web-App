import ClearIcon from "@mui/icons-material/Clear";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../Constants/Language";
import {handleLocalStorage} from "../../Common/handleLocalStorage";

export function AppHeader() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const currentLanguage = handleLocalStorage.get('language');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    handleLocalStorage.set("language", language)
    handleClose();
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="app-header-container">
      <div className="app-header__searchbox">
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
          placeholder="Search..."
          fullWidth
          sx={{
            maxWidth: "100%",
            "& .MuiOutlinedInput-root": {
              padding: "0", // Removes the padding inside the input
              border: "none", // Removes the border
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Removes the outline border
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
      <div className="app-header__group-btn">
        <IconButton
          color="primary"
          aria-label="add"
          sx={{
            backgroundColor: "#fff", // Primary color (or customize it)
            color: "#000", // Icon color
            width: 40, // Adjust size for roundness
            height: 40,
            borderRadius: "50%", // Makes it circular
            "&:hover": {
              //   backgroundColor: '#115293', // Darker shade on hover
            },
          }}
        >
          <FileDownloadOutlinedIcon />
        </IconButton>
        <div>
          <IconButton
            color="primary"
            aria-label="language"
            onClick={handleClick}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              width: 40,
              height: 40,
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <LanguageOutlinedIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {LANGUAGE.sort((a, b) => (a.name > b.name ? 1 : -1)).map(
              (language, index) => {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => handleLanguageChange(language.value)}
                  >
                    {currentLanguage === language.value ? <b>{t(`${language.value}`)}</b> : t(`${language.value}`)}
                  </MenuItem>
                );
              }
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
