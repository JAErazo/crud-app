import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Bienvenido, {username}!</h2>
          {/* Aquí puedes agregar el resto de la lógica del CRUD */}
        </div>
      )}
    </div>
  );
};

export default App;