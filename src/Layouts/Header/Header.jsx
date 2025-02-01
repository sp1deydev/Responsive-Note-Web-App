import ClearIcon from "@mui/icons-material/Clear";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { styled } from '@mui/material/styles';
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
import { CSVLink } from "react-csv";
import { TEMPLATE_HEADER_ARRAY } from "../../Constants/TemplateFile";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export function AppHeader() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [fileAnchorEl, setFileAnchorEl] = useState(null);
  const [exportData, setExportData] = useState([]);
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

  const handleExportCSVFile = (event, done) => {
    let csvData = [];
    if(allNotes && allNotes.length > 0) {
      csvData.push(TEMPLATE_HEADER_ARRAY);
      // eslint-disable-next-line
      allNotes.map((note) => {
        let arr = [];
        arr[0] = note.id;
        arr[1] = note.content;
        arr[2] = note.date;
        arr[3] = note.isMarked;
        csvData.push(arr);
      })
    }
    setExportData(csvData); 
    done();
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
            <CSVLink data={[TEMPLATE_HEADER_ARRAY]} filename={"template.csv"} style={{textDecoration: 'none', color:'inherit'}}>
              <MenuItem>
                <ListItemIcon>
                  <SaveAltIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{t('CSVTemplate')}</ListItemText>
              </MenuItem>
            </CSVLink>
            <CSVLink 
              data={exportData} 
              filename={"sp1dey-notes.csv"} 
              style={{textDecoration: 'none', color:'inherit'}}
              asyncOnClick={true}
              onClick={handleExportCSVFile}
            >
              <MenuItem>
                <ListItemIcon>
                  <FileDownloadIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{t('exportCSV')}</ListItemText>
              </MenuItem>
            </CSVLink>
            <MenuItem>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer", width: "100%" }}>
                <ListItemIcon>
                  <FileUploadIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{t('importCSV')}</ListItemText>
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  // multiple
                />
              </label>
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
