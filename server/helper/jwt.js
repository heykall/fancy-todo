const jwt = require('jsonwebtoken')
const SECRET_KEY = "mysecret"

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY)
  return token
}

module.exports = {
  generateToken
}