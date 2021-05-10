const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Subscribers } = require('../models');
const TopicService = require('./topics');

/**
 * Get a subscriber
 * @param {ObjectId} Subscribers
 * @returns {Promise<Subscribers>}
 */
const getSubscriber = async (subscriber) => {
	return Subscribers.findOne({ subscriber });
};

/**
 * Subscribe to a topic
 * @param {Object} body
 * @returns {Promise<Subscribers>}
 */

const subscribe = async ({ subscriber, topic }) => {
	if (!(await TopicService.getTopic(topic))) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Topic not found');
	}

	const data = await TopicService.subscribeToTopic(topic, subscriber);

	const subscriberData = await getSubscriber(subscriber);

	if (!subscriberData) {
		await Subscribers.create({ subscriber, topic });
	} else {
		await Subscribers.updateOne({ subscriber }, { $addToSet: { topics: [topic] } });
	}

	return data;
};

module.exports = { subscribe, getSubscriber };
