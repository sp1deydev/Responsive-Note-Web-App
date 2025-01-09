import Pagination from '@mui/material/Pagination';
import Typography from "@mui/material/Typography";
import { default as React } from "react";
import { useTranslation } from "react-i18next";
import MobileFloatingBtn from "../../Components/MobileFloatingBtn/MobileFloatingBtn";
import NoteCard from "../../Components/NoteCard/NoteCard";

function Home(props) {
    const {t} = useTranslation()
  return (
    <div className="">
      <Typography variant="h4">{t('notes')}</Typography>
      <br></br>
      <div className="home-list-cards">
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
      </div>
      <div className="home-pagination">
        <Pagination count={1} />
      </div>
      <MobileFloatingBtn/>
    </div>
  );
}

export default Home;
