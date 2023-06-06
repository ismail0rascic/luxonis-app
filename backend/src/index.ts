import app from "./App.js";
import { port } from "./config/config.js";
 import client from "./database/database.js";
 
 client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    client.query(`
      CREATE TABLE IF NOT EXISTS estates (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        location VARCHAR(255),
        price NUMERIC(10, 2),
        images TEXT[]
      )`);
    console.log("Database connected");
  }
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
