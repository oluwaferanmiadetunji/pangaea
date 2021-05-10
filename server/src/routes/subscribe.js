const express = require('express');
const validate = require('../middlewares/validate');
const { SubscriberValidation } = require('../validations');
const { SubscriberController } = require('../controllers');

const router = express.Router();

router.post('/:topic', validate(SubscriberValidation.subscribe), SubscriberController.subscribe);

module.exports = router;
