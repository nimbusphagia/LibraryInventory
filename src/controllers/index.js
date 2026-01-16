import { poolQuery } from "../database/index.js";

async function indexGet(req, res) {
  // Get all books
  const sql = 'SELECT * FROM book';
  const result = await poolQuery(sql);
  const books = result.rows;
  res.render('index', {
    books: books,
  })
}

export { indexGet };
