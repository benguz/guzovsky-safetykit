import { Pool } from 'pg';

export async function GET() {
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
            rejectUnauthorized: false, // You might need to change this based on your SSL config
          },
      });
    
    try {
        const result = await pool.query('SELECT * FROM users');
        // Use Response to return data
        return new Response(JSON.stringify(result.rows), {
          headers: {
            'Content-Type': 'application/json',
          },
          status: 200, // Set the status code
        });
    } catch (error) {
        console.error('Database query failed:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
    
  }


