const sqlite3 = require('sqlite3').verbose();

// Crea la conexión a la base de datos
const db = new sqlite3.Database(':memory:'); // Utiliza una base de datos en memoria para este ejemplo, pero puedes cambiarlo a un archivo en disco si lo deseas

// Crea la tabla de usuarios si no existe
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)');
});

module.exports = db;