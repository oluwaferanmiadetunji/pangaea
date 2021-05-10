const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Topics } = require('../models');
const { url2 } = require('../config/config');

/**
 * Get topic
 * @param {String} topic
 * @returns {Promise<Topics>}
 */
const getTopic = async (topic) => {
	return Topics.findOne({ topic });
};

/**
 * Get all topics
 * @returns {Promise<Topics>}
 */
const getTopics = async () => {
	return Topics.find({}, 'topic createdAt');
};

/**
 * Create a topic
 * @param {Object} body
 * @returns {Promise<Topics>}
 */

const createTopic = async (body) => {
	if (await getTopic(body.topic)) {
		throw new ApiError(httpStatus.BAD_REQUEST, 'Topic already exists');
	}

	return await Topics.create(body);
};

/**
 * Subscribe to a topic
 * @param {String} topic
 * @param {String} subscriber
 * @returns {Promise<Topics>}
 */

const subscribeToTopic = async (topic, subscriber) => {
	const topicData = await getTopic(topic);

	if (topicData.subscribers.includes(subscriber)) {
		throw new ApiError(httpStatus.BAD_REQUEST, 'Already subscribed');
	}

	await Topics.updateOne({ topic }, { $addToSet: { subscribers: [subscriber] } });

	return Object.freeze({
		url: `${url2}/${subscriber}`,
		topic,
	});
};

module.exports = { createTopic, getTopic, subscribeToTopic, getTopics };
