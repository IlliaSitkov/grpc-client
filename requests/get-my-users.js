
const client = require('../grpc-client');

const user = {id: 1};

const userGetter = client.getMyUsers(user);

userGetter.on('data', function(user) {
    console.log(user);
});
userGetter.on('end', function() {
    console.log('CALL ENDED');
});
userGetter.on('error', function(e) {
    console.log('ERROR:', e);
});
userGetter.on('status', function(status) {
    console.log('STATUS:', status);
});