const trimSubscriber = (subscriber) => subscriber.substring(subscriber.lastIndexOf('/') + 1);

module.exports = { trimSubscriber };
