const Joi = require('joi');

const subscribe = {
	params: Joi.object().keys({
		topic: Joi.string().required().trim(),
	}),
};

const getSubscriber = {
	params: Joi.object().keys({
		subscriber: Joi.string().required().trim(),
	}),
};

const getData = {
	params: Joi.object().keys({
		subscriber: Joi.string().required().trim(),
	}),
};

module.exports = {
	subscribe,
	getSubscriber,
	getData,
};
