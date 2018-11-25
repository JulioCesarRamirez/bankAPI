module.exports = function (app) {
  const userController = require('../controllers/user-controller');
  const validToken = require('../utils/valid-token');
  //routes
  app.route('/user')
    .get(userController.allUsers)
    .post(userController.addUser)

  app.route('/auth/user')
    .post(validToken.checkToken, userController.getUserById)
}