import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí debes realizar la verificación de las credenciales
    // Puedes usar una lógica personalizada o realizar una llamada a una API para verificar las credenciales

    // Por simplicidad, vamos a simular una verificación de credenciales
    if (username === 'usuario' && password === 'contraseña') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales inválidas.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Bienvenido, {username}!</h2>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;


/*
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de verificación de inicio de sesión
    // Por ejemplo, consultar la base de datos para verificar las credenciales
    // En este ejemplo, simplemente comprobamos que el usuario y la contraseña no estén vacíos
    if (username && password) {
      onLogin(username);
    } else {
      alert('Ingrese un usuario y una contraseña válidos.');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
*/