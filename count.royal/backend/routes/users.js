//We need express to allow the routing to take place
const router = require('express').Router();
//We require the model as we will be using it on the next page
let User = require('../models/user.model');

//If there is a "/" at the end of the url and it is a get request then this route will retrieve all the users in mongo collection
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//If there is a "/add" at the end of the url and it is a post request then this route will add a new user to the users in mongo collection
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Export the router so it can be used in the server
module.exports = router;