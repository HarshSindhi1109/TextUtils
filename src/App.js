import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Componenets/Navbar.js';
import TextForm from './Componenets/TextForm.js';
import Alert from './Componenets/Alert.js';
import About from './Componenets/About.js';

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
      <Router>
        {' '}
        {/* ✅ Wrap everything inside Router */}
        <Navbar title="Text Utils" toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Your Text Below"
                showAlert={showAlert}
                theme={theme}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
