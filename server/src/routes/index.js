const topicRoute = require('./topics');
const subscribeRoute = require('./subscribe');
const subscriberRoute = require('./subscriber');
const publishRoute = require('./publish');
const router = require('express').Router();

router.use('/publish', publishRoute);
router.use('/topic', topicRoute);
router.use('/subscribe', subscribeRoute);
router.use('/subscriber', subscriberRoute);

module.exports = router;
