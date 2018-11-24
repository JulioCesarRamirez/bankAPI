module.exports = function (app) {
  const userController = require('../controllers/user-controller');

  //routes
  app.route('/user')
    .get(userController.allUsers)
    .post(userController.addUser)

  app.route('/auth/user')
    .get(userController.getUserById)
}