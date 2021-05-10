const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { PublishService } = require('../services');
const { Socket } = require('../sockets');

const publishTopic = catchAsync(async (req, res) => {
	const topic = req.params.topic;
	const data = req.body;

	Socket.emit(topic, { topic, data });
	const response = await PublishService.publishTopic({ data, topic });

	res.status(httpStatus.CREATED).send(response);
});

module.exports = { publishTopic };
