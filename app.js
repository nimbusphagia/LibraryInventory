//Utilities
import 'dotenv/config'
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
//Routers
import { indexRouter } from './src/routes/index.js';

const app = express();
const port = process.env.PORT;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Middleware

app.use(indexRouter);

//Listen
app.listen(port, (err) => {
  if (err) {
    console.log('Error in server startup');
  }
  console.log("Server listening on Port", port)
})
