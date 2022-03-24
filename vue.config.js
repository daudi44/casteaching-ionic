const fs = require('fs')

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('./casteaching-ionic.test+3-key.pem'),
            cert: fs.readFileSync('./casteaching-ionic.test+3.pem'),
        },
        public: 'https://casteaching-ionic.test:8080/'
    }
}