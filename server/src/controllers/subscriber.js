const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { SubscriberService } = require('../services');
const { trimSubscriber } = require('../utils/helpers');
const ApiError = require('../utils/ApiError');

const subscribe = catchAsync(async (req, res) => {
	const subscriber = await SubscriberService.subscribe({ topic: req.params.topic, subscriber: trimSubscriber(req.body.url) });
	res.status(httpStatus.CREATED).send(subscriber);
});

const getTopics = catchAsync(async (req, res) => {
	const subscriber = await SubscriberService.getSubscriber(trimSubscriber(req.params.subscriber));
	if (!subscriber) {
		throw new ApiError(httpStatus.NOT_FOUND, 'subscriber not found');
	}
	res.send(subscriber);
});

module.exports = { subscribe, getTopics };
