import { poolQuery, createBook } from '../src/database/index.js';

async function createTables() {
  try {
    await poolQuery("BEGIN");

    await poolQuery(`
      CREATE TABLE IF NOT EXISTS author (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL
      )
    `);

    await poolQuery(`
      CREATE TABLE IF NOT EXISTS publisher (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        publisher_name TEXT NOT NULL
      )
    `);

    await poolQuery(`
      CREATE TABLE IF NOT EXISTS book (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title TEXT NOT NULL,
        author_id INT REFERENCES author(id) ON DELETE SET NULL,
        publisher_id INT REFERENCES publisher(id) ON DELETE SET NULL,
        year SMALLINT,
        description TEXT,
        img_url TEXT,
        isbn VARCHAR(17)
      )
    `);

    await poolQuery("COMMIT");
    console.log("Tables created successfully");
  } catch (err) {
    await poolQuery("ROLLBACK");
    console.error("Error creating tables", err);
  }

}

async function populateTables() {
  try {
    await poolQuery("BEGIN");
    /*

    await poolQuery(`
      INSERT INTO author (first_name, last_name)
      VALUES
        ('Haruki', 'Murakami'),
        ('Rosa', 'Montero'),
        ('Cornelia', 'Funke'), 
        ('Savannah', 'Brown'), 
        ('Roberto', 'Bolaño'),
        ('Jose','Saramago'),
        ('William','Shakespeare'),
        ('Jorge Luis', 'Borges')
    `);

    await poolQuery(`
      INSERT INTO publisher (publisher_name) 
      VALUES 
        ('Penguin Random House'), 
        ('The Chicken House'), 
        ('Scholastic'),
        ('Alfaguara'),
        ('Editorial Anagrama'),
        ('Oxford University Press'),
        ('Bloomsbury Publishing')
    `);
*/
    const books = [
      {
        title: "Kafka on the Shore",
        author_id: 1,
        publisher_id: 1,
        year: 2006,
        description: `Here we meet fifteen-year-old runaway Kafka Tamura...`,
        img_url: "https://images2.penguinrandomhouse.com/cover/9781400079278",
        isbn: "9781400079278",
      },
    ];

    for (const b of books) {
      await createBook(b);
    }

    await poolQuery("COMMIT");
    console.log("Tables populated successfully");
  } catch (err) {
    await poolQuery("ROLLBACK");
    console.error("Error populating tables", err);
  }
}
await populateTables();

