const jwt = require('jsonwebtoken');
const blockedIpAddresses = require('../ip-block-list');

/* Authorization middleware */
const authorize = async (req, res, next)=>{
    var token = req.headers['authorization']?.split(' ')[1];
    
    if(token)
    {
        let verify = jwt.verify(token, 'mySecreteKey@#1215');
        
        if(!verify)
        {
            res.send({message:"Missing or Invalid token provided."});
        }
        
        next();
    }
    else
    {
        res.send({message:"Missing or Invalid token provided."});
    }
}

/* Token generating middleware */
const generateToken = async(req, res, next)=>{

    var ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if(!(ipAddress && blockedIpAddresses.indexOf(ipAddress) != -1))         //check if the ip is in the block list
    {
        var token = jwt.sign(ipAddress, 'mySecreteKey@#1215');
        
        if(token)
        {
            res.send({message:'Use this token to access the APIs', token:token});
            next()
        }
    }
    else
    {
        res.send({message:'Cannot generate token for this IP Address as this is blocked.'});
    }
}

module.exports = {authorize,generateToken};