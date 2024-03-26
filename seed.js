const { db } = require('@vercel/postgres');
const { Pool } = require('pg');

const bcrypt = require('bcrypt');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})

const seedDatabase = async () => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Ensure the 'users' table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL
      );
    `);
    // Example: Inserting placeholder data into a 'users' table
    await client.query(`
      INSERT INTO users (name, email) VALUES
      ('Yongwei', 'yonggwei@primnceton.edu')
    `);


    // Commit the transaction
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }

  console.log('Database seeded!');
};

seedDatabase().catch(console.error);
