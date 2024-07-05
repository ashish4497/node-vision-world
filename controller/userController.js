const User = require('../models/userSchema')

exports.getUser = (req, res) => {
  const user = new User({
    userName :"ashish",
    email:"ashish@gmail.com"
  })
  user.save().then((result)=>res.send(result))
  .catch((err) => console.log(err))
}