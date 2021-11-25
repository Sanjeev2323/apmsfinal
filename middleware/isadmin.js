const jwt = require("jsonwebtoken");

const config = process.env;

const verifyadmin = (req, res, next) => {
  const token = req.headers["x-access-token"];
  //console.log(token1);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    console.log(decoded);
    req.user= decoded;
    if(decoded.role=='admin'){
        return next();
    }
    else{
        return res.status(401).send('unauthorized');
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
   
  }
//  return next();
};

module.exports = verifyadmin;