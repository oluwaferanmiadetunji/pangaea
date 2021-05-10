const Joi = require('joi');

const createTopic = {
	body: Joi.object().keys({
		topic: Joi.string().required().trim(),
	}),
};

const getTopic = {
	params: Joi.object().keys({
		topic: Joi.string().required().trim(),
	}),
};

module.exports = {
	createTopic,
	getTopic,
};
