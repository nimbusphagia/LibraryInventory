import { getAuthors, poolQuery } from "../database/index.js"

async function authorsGet(req, res) {
  const authors = await getAuthors();
  res.render('authors', { authors: authors });
}
async function authorsPost(req, res) {
  const { action } = req.body;
  try {
    if (action === 'create') {
      const { first_name, last_name } = req.body;
      await poolQuery(`INSERT INTO author (first_name, last_name) 
        VALUES ($1, $2)`, [first_name, last_name]);
      return res.redirect('/authors');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");

  }
}
export { authorsGet, authorsPost };
