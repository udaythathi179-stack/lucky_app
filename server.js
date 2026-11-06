/**
 * Tuneus Music Player - Server Root Entry Point
 * Modular 3-Tier Architecture:
 *   - Frontend: /frontend
 *   - Backend:  /backend
 *   - Database: /database
 */

const server = require('./backend/server');

const PORT = process.env.PORT || 3000;

if (!server.listening) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`=================================================`);
    console.log(` Tuneus Music App - 3-Tier Architecture Active   `);
    console.log(` Tier 1 [Frontend]: ./frontend`);
    console.log(` Tier 2 [Backend ]: ./backend`);
    console.log(` Tier 3 [Database]: ./database`);
    console.log(` Server running at http://localhost:${PORT}`);
    console.log(`=================================================`);
  });
}

module.exports = server;
