const passport = require('passport');
const jwt = require('jsonwebtoken');

class Auth {
  static signIn(req, res, next) {
    // eslint-disable-next-line consistent-return
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) { return next(err); }
      if (!user) {
        return res.status(401).send({
          message: info.message,
          status: false,
        });
      }
      req.logIn(user, { session: false }, (error) => {
        if (error) { return next(err); }
        const userToken = {
          id: user.id,
          username: user.username,
        };
        const tokenServer = jwt.sign(userToken, 'Kyrgyzstan');
        return res.send({
          message: 'Authentication successful',
          token: tokenServer,
          teacher: {
            id: user.id,
            username: user.username,
            email: user.email,
          },
          status: true,
        });
      });
    })(req, res, next);
  }
}
module.exports = Auth;
