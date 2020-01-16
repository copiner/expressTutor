//https://github.com/mysqljs/mysql
var mysql = require("mysql");
var pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"francis",
	database:"wds"
});

function query(sql, callback){
	pool.getConnection(function(err, connection){
		connection.query(sql, function(err, result){
			callback(err, result);
			connection.release();
		});
	});
}

exports.query = query;
