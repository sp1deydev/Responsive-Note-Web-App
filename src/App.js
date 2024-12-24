import './App.css';
// import i18n from './Language/i18n';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const handleChangeLanguage = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
