import { useEffect } from 'react';
import './App.css';
import { useCurrentLanguage } from './Hooks/useCurrentLanguage';
// import i18n from './Language/i18n';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import { handleLocalStorage } from './Common/handleLocalStorage';
import { noteSlice } from './Redux/noteSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useCurrentLanguage();
  useEffect(()=> {
    const notes = handleLocalStorage.get('notes');
    dispatch(noteSlice.actions.loadData(notes))
  }, []);
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
