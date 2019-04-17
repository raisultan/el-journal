const bCrypt = require('bcrypt-nodejs');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, models) => {
  const { User } = models;

  passport.use('techerOrParent', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Kyrgyzstan',
    passReqToCallback: true,
  },
  (async (req, jwtPayload, done) => {
    try {
      const user = await User.findOne({ where: { id: jwtPayload.id } });
      if (user) return done(null, user);
      return done(null, false);
    } catch (error) {
      return done(error);
    }
  })));
  passport.use(new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (async (req, username, password, done) => {
      try {
        const user = await User.findOne({
          where: { username },
        });
        if (!user) {
          return done(null, false, {
            message: 'Пользователь не зарегистрирован',
          });
        }
        if (!bCrypt.compareSync(password, user.password)) {
          return done(null, false, {
            message: 'Неправильный пароль',
          });
        }
        const userinfo = user.get();
        return done(null, userinfo);
      } catch (error) {
        return done(null, false, {
          message: 'Oops. Unknown error',
        });
      }
    }),
  ));
};
