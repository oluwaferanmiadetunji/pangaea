const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { TopicService } = require('../services');

const createTopic = catchAsync(async (req, res) => {
	const topic = await TopicService.createTopic(req.body);
	res.status(httpStatus.CREATED).send(topic);
});

const getTopic = catchAsync(async (req, res) => {
	const topic = await TopicService.getTopic(req.params.topic);
	if (!topic) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Topic not found');
	}
	res.status(httpStatus.OK).send(topic);
});

const getTopics = catchAsync(async (req, res) => {
	const topics = await TopicService.getTopics();

	res.status(httpStatus.OK).send(topics);
});

module.exports = { createTopic, getTopic, getTopics };
