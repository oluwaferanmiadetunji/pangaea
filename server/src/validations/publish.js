const Joi = require('joi');

const publish = {
	params: Joi.object().keys({
		topic: Joi.string().required().trim(),
	}),
};

module.exports = {
	publish,
};
