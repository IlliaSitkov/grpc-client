
const client = require('../grpc-client');

const authorId = 1;
const receiverIds = [153, 202, 206, 208, 211, 212, 299, 300, 295, 296, 280, 283, 284];

const messageGetter = client.getMessagesOfUsers();

receiverIds.forEach(receiverId => {
    messageGetter.write({authorId: authorId, receiverId});
});
messageGetter.end();

messageGetter.on('data', function(message) {
    console.log(message);
});
messageGetter.on('end', function() {
    console.log('CALL ENDED');
});
messageGetter.on('error', function(e) {
    console.log('ERROR:', e);
});
messageGetter.on('status', function(status) {
    console.log('STATUS:', status);
});