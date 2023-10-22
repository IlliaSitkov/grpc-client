
const amqp = require('amqplib');
const LogMessage = require('./database');

const EMAIL_NOTIFICATION_QUEUE = 'email_notification_queue';
const LOG_QUEUE = 'log_queue';

const setUpRabbitMQ = async () => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        console.log('Connected successfully');

        const channel = await connection.createChannel();

        await channel.assertQueue(EMAIL_NOTIFICATION_QUEUE);
        channel.consume(EMAIL_NOTIFICATION_QUEUE, (message) => {
            const emailNotification = JSON.parse(message.content.toString());
            console.log('RECEIVED EMAIL:', emailNotification);
            console.log('SEND EMAIL to:', emailNotification.email);
            channel.ack(message);
        });

        await channel.assertQueue(LOG_QUEUE);
        channel.consume(LOG_QUEUE, (message) => {
            const logMessage = JSON.parse(message.content.toString());
            console.log('RECEIVED LOG MESSAGE:', message.content.toString());
            LogMessage.create(logMessage)
                .then(log => {
                    console.log('SAVED LOG MESSAGE:', log);
                });
            channel.ack(message);
        });
    } catch(e) {
        console.log('Connection failed:', e);
    }
}

setUpRabbitMQ();

