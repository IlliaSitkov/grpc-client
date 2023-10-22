
const client = require('../grpc-client');

const user = {email: 'user100@email.com', username: 'user100'};

client.saveUser(user, (err, res) => {
    if (err) {
        console.log('ERROR:', err);
    } else {
        console.log(res);
    }
});

