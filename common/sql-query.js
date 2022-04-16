const connection = require('./db-connection');

var executeStmt = async function(query, values)
{
    console.log(`Executing your query ...`);
    
    return new Promise((resolve, reject)=>{
        connection.query(query, values, (error, result, fields) => {
        
            if (error) {
                console.log("Err ::: ", error); 
                resolve(null);
            };
    
            console.log(`Doing task ::: `, query, values, result);
            
            resolve(result);
        });
    });
}

module.exports = executeStmt;