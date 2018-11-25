const jwt = require('jsonwebtoken');

exports.checkToken = function (req, res, next) {
  let token = req.headers['x-access-token'];

  if(!token){
    return res.status(403).send({auth:false, message: 'No token provided.'});
  }
  jwt.verify(token, 'secret', function (err, decode) {
    if(err){
      return res.status(500).send({auth:false, message: 'Failed to authenticate token.'});
    }
    next();
  })
}