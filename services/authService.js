const jws = require("jsonwebtoken");


const JWT_secret= "MIIBOwIBAAJBAMd2yU0W1b2wSMlhnVDmbU06grUWVyPGg1/6QgI3u/5gjNP2r85rl8yTdZO2vYp5X1UxO4+BuZCDKqeX/nSKcuUCAwEAAQJAYB1hSwBh5pH3wPKEt+MRcFFtgo1NWDPkQm95N1BcCmrp+89d0WXdUK82kykTP5GwYnwQqIii2QDvA9itC9iDAQIhAOtkCVpwPwMT77PLSOTfDQLTyvfpFYMitrXSzLiRikiVAiEA2O2AHGPRmu0h5gP3HeSdSrweWevuw1ZTBbwe5C8n3RECIGK7nhS6GiQPW66daODfEhUKgwsDUEul5t9TIR2VplwVAiEAv2kxtdtORIohczjkgHgNYriDf4zzbWFqeJD6IRaK8kECIQCOm/UqrcEKsl34QetjdBTUHyj1qagRHHihOPjUj4BJIA=="

// Creamos una funcion para generar un token JWT
function generateToken(user) {
    const payload = {
      userId: user._id,
      email: user.email,
    };
    const token = jwt.sign(payload, JWT_secret, { expiresIn: "1d" });
    return token
  }
  module.exports= {
      generateToken
  }