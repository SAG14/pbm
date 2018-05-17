// Project Configuration file

module.exports = {

    // Change variable for DEV/PROD
    isDev: true,
    
    db: 'mongodb://username:password@url:port/db',
    db_dev: 'mongodb://admin:pbmtest@ds261479.mlab.com:61479/pbm-demo',
    
    // Location of frontend website
    frontend_path:'',
    frontend_path_dev:'http://localhost:3000',

    // Email variables
    emailService: 'gmail',
    emailUsername: 'pbm.project.vfy@gmail.com',
    emailPassword: 'pbm4900test',

};