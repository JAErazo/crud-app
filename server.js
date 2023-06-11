const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Crear una conexión a la base de datos SQLite
const db = new sqlite3.Database(':memory:');

// Crear la tabla de registros de login
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS logins (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
});

// Endpoints para el CRUD
app.use(express.json());

// Obtener todos los registros de login
app.get('/api/logins', (req, res) => {
  db.all('SELECT * FROM logins', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json(rows);
    }
  });
});

// Crear un nuevo registro de login
app.post('/api/logins', (req, res) => {
  const { username, password } = req.body;
  db.run('INSERT INTO logins (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    } else {
      res.sendStatus(201);
    }
  });
});

// Actualizar un registro de login
app.put('/api/logins/:id', (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  db.run('UPDATE logins SET username = ?, password = ? WHERE id = ?', [username, password, id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    } else {
      res.sendStatus(200);
    }
  });
});

// Eliminar un registro de login
app.delete('/api/logins/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM logins WHERE id = ?', id, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    } else {
      res.sendStatus(200);
    }
  });
});

// Crear la tabla de personas
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS personas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT, edad INTEGER)');
  });
  
  // Endpoints para el CRUD
  app.use(express.json());
  
  // Obtener todas las personas
  app.get('/api/personas', (req, res) => {
    db.all('SELECT * FROM personas', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
      } else {
        res.json(rows);
      }
    });
  });
  
  // Obtener una persona por ID
  app.get('/api/personas/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM personas WHERE id = ?', id, (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
      } else if (row) {
        res.json(row);
      } else {
        res.status(404).send('Persona no encontrada');
      }
    });
  });
  
  // Crear una persona
  app.post('/api/personas', (req, res) => {
    const { nombre, apellido, edad } = req.body;
    db.run('INSERT INTO personas (nombre, apellido, edad) VALUES (?, ?, ?)', [nombre, apellido, edad], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
      } else {
        res.sendStatus(201);
      }
    });
  });
  
  // Actualizar una persona por ID
  app.put('/api/personas/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad } = req.body;
    db.run('UPDATE personas SET nombre = ?, apellido = ?, edad = ? WHERE id = ?', [nombre, apellido, edad, id], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  // Eliminar una persona por ID
  app.delete('/api/personas/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM personas WHERE id = ?', id, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
      } else {
        res.sendStatus(200);
      }
    });
  });
  
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});