module.exports = function (app) {
  const userController = require('../controllers/user-controller');
  const validToken = require('../utils/valid-token');
  const cardController = require('../controllers/card-controller');
  const accountController = require('../controllers/account-controller');
  // account routes
  app.route('/account')
    .get(accountController.allAccounts)
    .post(accountController.addAccount)

  app.route('/user/account')
    .post(validToken.checkToken, accountController.getAccountByUser)
  //card routes
  app.route('/card')
    .get(cardController.allCards)
    .post(cardController.addCard)

  app.route('/user/card')
    .post(validToken.checkToken, cardController.getCardByUser)
  //user routes
  app.route('/user')
    .get(userController.allUsers)
    .post(userController.addUser)

  app.route('/auth/user')
    .post(validToken.checkToken, userController.getUserById)
}