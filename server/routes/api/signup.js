const User = require('../../models/User');
const UserSession = require('../../models/UserSession');
const EmailVerification = require('../../models/EmailVerification');
const config = require('../../../config/config');

var crypto = require('crypto');
var nodemailer = require('nodemailer');

module.exports = (app) => {
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            password,
            confirmPassword
        } = body;
        let {
            email,
            firstName,
            lastName,
            studentNo
        } = body;

        // RegExp
        const emailRegex = RegExp('^[a-zA-Z0-9]*@my.bcit.ca$');
        const studentNoRegex = RegExp('^A{1}[0-9]{8}$');

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
        if (!confirmPassword) {
            return res.send({
                success: false,
                message: 'Error: Confirmation password cannot be blank.'
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
        if (password !== confirmPassword) {
            return res.send({
                success: false,
                message: 'Error: Passwords do not match.'
            });
        }

        // Changes data format
        email = email.toLowerCase().trim();
        firstName = firstName.toLowerCase().trim();
        lastName = lastName.toLowerCase().trim();
        studentNo = studentNo.toUpperCase().trim();

        // Checking RegExp
        if (!emailRegex.test(email)) {
            return res.status(401).send({
                success: false,
                message: 'Error: The email provided is not a BCIT email. (ex. student@my.bcit.ca)'
            });
        }

        if (!studentNoRegex.test(studentNo)) {
            return res.status(401).send({
                success: false,
                message: 'Error: Please provide a valid BCIT student ID. (ex. A00123456)'
            });
        }

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

                // Creates the email token
                var emailToken = new EmailVerification({
                    _userId: user._id,
                    token: crypto.randomBytes(16).toString('hex')
                });

                emailToken.save(function(err) {
                    if (err) {
                        return res.status(500). send ({
                            success: false,
                            message: err.message 
                        });
                    }

                    // Sending the email
                    var transporter = nodemailer.createTransport({
                        service: config.emailService,
                        auth: {
                            user: config.emailUsername,
                            pass: config.emailPassword
                        }
                    });

                    const url = `http://localhost:3100/confirmation/${emailToken.token}`;

                    var mailOptions = { 
                        from: config.emailUsername, 
                        to: user.email,
                        subject: 'Account Verification Token',
                        //text: 'Hello,\n\n Thank you for signing up an account for the PhotoBook Maker. Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + emailToken.token + '.\n'
                        html: `Please click this link to confirm your email: ${url}`
                    };

                    transporter.sendMail(mailOptions, function (err) {
                        if (err) {
                            return res.status(500).send({
                                success: false,
                                message: err.message
                            });
                        }
                        return res.status(200).send({
                            success: true,
                            message: 'Verification email has been sent to ' + user.email + '.'
                        });
                        // TODO: Redirect to login
                        // return res.redirect('http://localhost:3000/');
                    });
                });
            });
        });
    });

    // Confirms the token
    app.get('/confirmation/:token', (req, res, next) => {

        if (!req.params.token) {
            return res.status(400).send({
                success: false,
                message: 'Error: Token cannot is empty.'
            });
        }

        EmailVerification.findOne({
            token: req.params.token
        }, function(err, token) {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            if (!token) {
                return res.status(400).send({
                    success: false,
                    message: 'Unable to find valid token, your token may have expired.'
                });
            }

            User.findOne({
                _id: token._userId
            }, function(err, user) {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }

                if (!user) {
                    return res.status(400).send({
                        success: false,
                        message: 'We were unable to find a user for this token.'
                    });
                }

                if (user.isVerified) {
                    return res.status(400).send({
                        success: false,
                        message: 'This user has already been verified.'
                    });
                }

                // Verify and save the user
                user.isVerified = true;
                user.save(function (err) {
                    if (err) {
                        return res.status(500).send({
                            success: false,
                            message: err.message
                        })
                    }

                    return res.status(200).send({
                        success: true,
                        message: "The account has been verified. Please log in."
                    });
                    // TODO: Redirect to login
                    //return res.redirect('http://localhost:3000/');
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
                return res.status(400).send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }

            if (users.length != 1) {
                return res.status(401).send({
                    success: false,
                    message: 'Error: Invalid email address.'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.status(401).send({
                    success: false,
                    message: 'Error: Invalid password'
                });
            }

            // Checks that the account has been verified via email
            if (!user.isVerified) {
                return res.status(401).send({
                    success: false,
                    message: 'Your account is not verified.'
                });
            }

            // Correct credentials
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: 'Error: server error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id,
                    currentUser: {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    },
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