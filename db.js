const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './data.db';

function initializeDatabase() {
  const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the SQLite database.');
      createTable();
    }
  });

  function createTable() {
    db.run(
      `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
      )`,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
  }

  return db;
}

module.exports = initializeDatabase();
