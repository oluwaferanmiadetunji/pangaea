const express = require('express');
const validate = require('../middlewares/validate');
const { SubscriberValidation } = require('../validations');
const { SubscriberController } = require('../controllers');

const router = express.Router();

router.get('/:subscriber', validate(SubscriberValidation.getSubscriber), SubscriberController.getTopics);

module.exports = router;
