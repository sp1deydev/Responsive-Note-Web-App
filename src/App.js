import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './Language/i18n';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const {t} = useTranslation()
  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <select onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="vi">Vietnam</option>
        </select>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('welcome')}
          <br></br>
          {t('description')}
        </a>
      </header> */}
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
