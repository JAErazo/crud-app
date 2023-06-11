import React, { useEffect, useState } from 'react';

const App = () => {
  const [logins, setLogins] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('/api/logins')
      .then((response) => response.json())
      .then((data) => setLogins(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCreate = () => {
    fetch('/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          setUsername('');
          setPassword('');
          fetchLogins();
        } else {
          console.error('Error al crear el registro de login');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleUpdate = (id) => {
    fetch(`/api/logins/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          setUsername('');
          setPassword('');
          fetchLogins();
        } else {
          console.error('Error al actualizar el registro de login');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    fetch(`/api/logins/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          fetchLogins();
        } else {
          console.error('Error al eliminar el registro de login');
        }
      })
      .catch((error) => console.error(error));
  };

  const fetchLogins = () => {
    fetch('/api/logins')
      .then((response) => response.json())
      .then((data) => setLogins(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Registros de login</h2>
      <table>
        <tbody>
          {logins.map((login) => (
            <tr key={login.id}>
              <td>{login.id}</td>
              <td>{login.username}</td>
              <td>{login.password}</td>
              <td>
                <button onClick={() => handleUpdate(login.id)}>Editar</button>
                <button onClick={() => handleDelete(login.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Inicio de sesion</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleCreate}>Guardar</button>
    </div>
  );
};

const Appt = () => {
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    fetch('/api/personas')
      .then((response) => response.json())
      .then((data) => setPersonas(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCreate = () => {
    fetch('/api/personas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, edad }),
    })
      .then((response) => {
        if (response.ok) {
          setNombre('');
          setApellido('');
          setEdad('');
          fetchPersonas();
        } else {
          console.error('Error al crear la persona');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleUpdate = (id) => {
    fetch(`/api/personas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, edad }),
    })
      .then((response) => {
        if (response.ok) {
          setNombre('');
          setApellido('');
          setEdad('');
          fetchPersonas();
        } else {
          console.error('Error al actualizar la persona');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    fetch(`/api/personas/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          fetchPersonas();
        } else {
          console.error('Error al eliminar la persona');
        }
      })
      .catch((error) => console.error(error));
  };

  const fetchPersonas = () => {
    fetch('/api/personas')
      .then((response) => response.json())
      .then((data) => setPersonas(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Personas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.edad}</td>
              <td>
                <button onClick={() => handleUpdate(persona.id)}>Editar</button>
                <button onClick={() => handleDelete(persona.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Crear/Editar persona</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <button onClick={handleCreate}>Guardar</button>
    </div>
  );
};
export default App;