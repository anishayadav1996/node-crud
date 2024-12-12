import db from '../database/db.js';

export const insertUser = (req, res) => {
    
    const sql = `
        INSERT INTO user (name, email, phone, created_date, updated_date, status)
        VALUES ('John Doe', 'john.doe@example.com', '9876543210', NOW(), NOW(), 1)
    `;

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Failed to insert data.', error: err.message });
        }

        console.log('User inserted successfully.');
        res.status(201).json({ message: 'User inserted successfully.', id: result.insertId });
    });
};




export const getUsers = (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            return res.status(500).json({ message: 'Failed to fetch data.' });
        }
        res.status(200).json(results);
    });
};
