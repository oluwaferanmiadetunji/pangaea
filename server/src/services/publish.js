const { Messages } = require('../models');
const TopicService = require('./topics');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

/**
 * Publish Topic
 * @param {Any} data
 * @returns {Promise<Messages>}
 */
const publishTopic = async ({ data, topic }) => {
	if (!(await TopicService.getTopic(topic))) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Topic not found');
	}
	return Messages.create({ ...data, topic });
};

module.exports = { publishTopic };
