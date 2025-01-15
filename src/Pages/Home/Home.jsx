import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { default as React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileFloatingBtn from "../../Components/MobileFloatingBtn/MobileFloatingBtn";
import NoteCard from "../../Components/NoteCard/NoteCard";
import { useSelector } from "react-redux";
import SnackBarNotification from "../../Components/SnackBarNotification/SnackBarNotification";
// import Link from '@mui/material/Link';

function Home(props) {
  const { t } = useTranslation();
  const notes = useSelector((state) => state.note);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [snackBarInfo, setSnackBarInfo] = useState({
    message: "",
    open: false,
  });
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 739) {
        setItemsPerPage(5); // Small devices
      } else if (window.innerWidth < 1023) {
        setItemsPerPage(8); // Medium devices
      } else if (window.innerWidth < 1023) {
        setItemsPerPage(15); // Large devices
      } else {
        setItemsPerPage(12);
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = notes.slice(startIndex, endIndex);

  const totalPages = Math.ceil(notes.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleSnackBar = (param) => {
    if (param === "edit") {
      setSnackBarInfo({ message: t("editSuccess"), open: true });
    }
    if (param === "delete") {
      setSnackBarInfo({ message: t("deleteSuccess"), open: true });
    }
  };
  const handleCloseSnackBar = () => {
    setSnackBarInfo({ message: "", open: false });
  };
  return (
    <div className="">
      <Typography variant="h4">{t("notes")}</Typography>
      <br></br>
      {currentItems.length ? (
        <>
          <div className="home-list-cards">
            {currentItems.map((note, index) => {
              return (
                <NoteCard
                  key={index}
                  note={note}
                  onEventSnackBar={handleSnackBar}
                />
              );
            })}
          </div>
          <div className="home-pagination" style={{display: 'flex', justifyContent:'center', width: '100%'}}>
            <Pagination count={totalPages} onChange={handlePageChange}/>
          </div>
        </>
      ) : (
        <div style={{
          textAlign:'center',  
          display: "flex", 
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",   }}>
          <Typography variant="h7" color="gray">{t("empty")}</Typography>
          {/* <Link href="#" color="inherit" fontSize={16}>
            {t('retry')}
          </Link> */}
        </div>
      )}
      <SnackBarNotification
        open={snackBarInfo.open}
        message={snackBarInfo.message}
        onFinish={handleCloseSnackBar}
      />
      <MobileFloatingBtn />
    </div>
  );
}

export default Home;
