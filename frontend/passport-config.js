import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => { 
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email' }); 
        }

        try {
            if (await bcrypt.compare(password, user.password)) { 
                return done(null, user); 
            } else {
                return done(null, false, { message: 'Wrong password' }); 
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser)); 

    passport.serializeUser((user, done) => {

    });

    passport.deserializeUser((id, done) => {

    });
}

export default initialize
