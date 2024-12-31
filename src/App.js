import './App.css';
import { useCurrentLanguage } from './Hooks/useCurrentLanguage';
// import i18n from './Language/i18n';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const handleChangeLanguage = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // }
  useCurrentLanguage();
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
