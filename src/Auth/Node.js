const mysql = require('mysql');

// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amey@123',
    database: 'hotel',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// SQL query for login authentication
const loginQuery = 'SELECT * FROM student WHERE mail = ? AND password = ?';

// Function to perform login authentication
function authenticateLogin(email, password) {
    return new Promise((resolve, reject) => {
        connection.query(loginQuery, [email, password], (err, results) => {
            if (err) {
                reject(err);
            } else {
                if (results.length > 0) {
                    resolve(true); // Login successful
                } else {
                    resolve(false); // Login failed
                }
            }
        });
    });
}

// Usage example
const email = 'example@example.com';
const password = 'password';

authenticateLogin(email, password)
    .then((isAuthenticated) => {
        if (isAuthenticated) {
            console.log('Login successful');
        } else {
            console.log('Invalid email or password');
        }
    })
    .catch((error) => {
        console.error('Error occurred during login:', error);
    });
