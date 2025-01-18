import { useState } from 'react';
import './App.css';
import Navbar from './Componenets/Navbar.js';
import TextForm from './Componenets/TextForm.js';
import Alert from './Componenets/Alert.js';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };
  return (
    <>
      <Navbar title="Text Utils" toggleTheme={toggleTheme} />
      <Alert alert={alert} />
      <TextForm
        heading="Enter Your Text Below"
        showAlert={showAlert}
        theme={theme}
      />
    </>
  );
}

export default App;
