var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config =
{
    authentication: {
        options: {
            userName: 'vasco',
            password: 'Traquinas21'
        },
        type: 'default'
    },
    server: 'liflow.database.windows.net',
    options:
    {
        database: 'liflow',
        encrypt: true
    }
}

exports.connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
exports.connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
    }
);

exports.executeCommand = function(query) {
    var request = new Request(query,
        function(err, rowCount, rows)
        {
            if (err) {
                process.exit();
                throw err;
            }
            process.exit();
        }
    );
    exports.connection.execSql(request);
}