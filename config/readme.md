
```javascript
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
```

```javascript

/*
var sql = require('dbase.js');
var sqllan = "update infos set sex=0 where name='francis'"
sql.manipulate(sqllan, function(result){
  console.log(result);
})
*/
//you can do this

var mysql = require("mysql");
var dbase = {};
dbase.manipulate = function sqlback(sqllan, func){
  var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'francis',
    database:'wds',
    port:3306
  });

  connection.connect(function(err){
    if(err){
      console.log(err);
      return;
    }
  });

  connection.query(sqllan, function(err, result, fields){
    if(err){
      console.log(err);
      return;
    }
    func(result);
  });

  connection.end(function(err){
    if(err){
      return;
    } else {
      console.log('connection close');
    }
  });
}

module.exports = dbase;


```
