import 'dotenv/config';
import { Pool } from "pg";
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function poolQuery(sql, params = []) {
  return pool.query(sql, params);
}
async function createBook({
  title,
  author_id = null,
  publisher_id = null,
  year = null,
  description = null,
  img_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1l59hU1fd-knVZjraUO8XAe4DN08yJGj-w&s',
  isbn = null,
}) {
  const query = {
    text: `
      INSERT INTO book (title, author_id, publisher_id, year, description, img_url, isbn )
      VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    values: [title, author_id, publisher_id, year, description, img_url, isbn],
  };
  await poolQuery(query.text, query.values);
}
export { poolQuery, createBook };
