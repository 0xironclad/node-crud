import pool from "../config/db.js"

const createUsersTable = async() => {
    const client = await pool.connect()
    try {
        await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `)
        console.log('Users table created successfully!!')
    } catch (error) {
        console.error('Error creating users table:', error)
    } finally {
        client.release()
    }
}


export default createUsersTable
