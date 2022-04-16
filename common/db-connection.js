var mysql = require('mysql');

var pool = mysql.createConnection({
    connectionLimit : 10,
    host: 'sql10.freesqldatabase.com',
    user: 'sql10486133',
    password: 'NW1YkA7NUZ',
    database: 'sql10486133'
});

module.exports = pool;