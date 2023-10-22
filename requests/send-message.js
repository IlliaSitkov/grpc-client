
const client = require('../grpc-client');

const messages = [
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 202,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 206,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 208,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 211,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 212,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 299,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 300,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 295,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 296,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 280,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 283,
    },
    {
        message: 'Hello from user2!',
        authorId: 153,
        receiverId: 284,
    },
];

const messageSender = client.sendMessage((err, res) => {
    if (err) {
        console.log('ERROR:', err);
    } else {
        console.log(res);
    }
});
messages.forEach(message => {
    messageSender.write(message);
})
messageSender.end();
