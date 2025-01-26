import ClearIcon from "@mui/icons-material/Clear";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../Constants/Language";
import {handleLocalStorage} from "../../Common/handleLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { noteSlice } from "../../Redux/noteSlice";
import { ListItemIcon, ListItemText } from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { CSVLink, CSVDownload } from "react-csv";
import { TEMPLATE_HEADER_ARRAY, TEMPLATE_HEADER_OBJECT } from "../../Constants/TemplateFile";

export function AppHeader() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [fileAnchorEl, setFileAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const allNotes = useSelector(state => state.note.allNotes)
  const marked = useSelector((state) => state.note.filterInfo.marked);

  useEffect(() => {
    dispatch(noteSlice.actions.loadFilterData({marked: marked, search: value}))
    // eslint-disable-next-line
  }, [allNotes])
  let currentLanguage = handleLocalStorage.get('language');
  if(!currentLanguage) {
    currentLanguage = 'en'
  }

  const handleSearch = (event) => {
    setValue(event.target.value)
    dispatch(noteSlice.actions.loadFilterData({marked: marked, search: event.target.value}))
  }
  const handleClear = () => {
    setValue("");
    dispatch(noteSlice.actions.loadFilterData({marked: marked, search: ""}))
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickFileMenu = (event) => {
    setFileAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setFileAnchorEl(null);
  };

  
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    handleLocalStorage.set("language", language)
    handleClose();
  };
  // const csvData = [
  //   // ["firstname", "lastname", "email"],
  //   ["Ahmed", "Tomi", "ah@smthing.co.com"],
  //   ["Raed", "Labes", "rl@smthing.co.com"],
  //   ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  // ]
  const csvData = [
      { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
      { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
      { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
    ];
  
  

  return (
    <div className="app-header-container">
      <div className="app-header__searchbox">
        <TextField
          value={value}
          onChange={handleSearch}
          variant="outlined"
          placeholder={t(`search`)}
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
          onClick={handleClickFileMenu}
        >
          <FileDownloadOutlinedIcon />
        </IconButton>
        <Menu
            anchorEl={fileAnchorEl}
            open={Boolean(fileAnchorEl)}
            onClose={handleClose}
          >
            <CSVLink data={TEMPLATE_HEADER_ARRAY} filename={"template.csv"} style={{textDecoration: 'none', color:'inherit'}}>
            <MenuItem>
              <ListItemIcon>
                <SaveAltIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t('CSVTemplate')}</ListItemText>
            </MenuItem>
              </CSVLink>
            <MenuItem>
              <ListItemIcon>
                <FileUploadIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t('importCSV')}</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <FileDownloadIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t('exportCSV')}</ListItemText>
            </MenuItem>
          </Menu>
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
