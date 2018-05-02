const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email,
            firstName,
            lastName,
            studentNo
        } = body;

        // Null checks
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }
        if (!firstName) {
            return res.send({
                success: false,
                message: 'Error: First Name cannot be blank.'
            });
        }
        if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last Name cannot be blank.'
            });
        }
        if (!studentNo) {
            return res.send({
                success: false,
                message: 'Error: Student Number cannot be blank.'
            });
        }

        // Changes data format
        email = email.toLowerCase().trim();
        firstName = firstName.toLowerCase().trim();
        lastName = lastName.toLowerCase().trim();
        studentNo = studentNo.toUpperCase().trim();

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exists.'
                });
            }

            // Creates the user object
            const newUser = new User();
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.studentNo = studentNo;
            
            // Saves the user object
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server Error.'
                    })
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            });
        });
    });

    app.get('/api/users', (req, res, next) => {
        User.find()
            .exec()
            .then((user) => res.json(user))
            .catch((err) => next(err));
    });

    // The login api 
    app.post('/api/account/login', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        email = email.toLowerCase().trim();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                console.log('Error: ', err);
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Cannot find user by specified Email'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid password'
                });
            }

            // Correct credentials
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });
    });

    app.get('/api/account/logout', (req, res, next) => {
        // Get the token
        const { query } = req;
        const { token } = query;

        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
            $set: {
                isDeleted: true
            }
        }, null, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.sent({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            return res.send({
                success: true,
                message: 'Logged out'
            });
        });
    });

    app.get('/api/account/verify', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        UserSession.find({
            _id: token,
            isDelete: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    sucess: false,
                    message: 'Error: Server error'
                });
            }

            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid Session'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Valid token'
                });
            }
        });
    });
};

// function checkNullProperty(property) {
//     if (!property) {
//         return res.send({
//             success: false,
//             message: `Error: ${property} field cannot be blank.`
//         })
//     }
// }