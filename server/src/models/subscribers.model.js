const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const subscribersSchema = mongoose.Schema(
	{
		subscriber: {
			type: String,
			required: true,
			trim: true,
		},
		topics: {
			type: Array,
		},
	},
	{
		timestamps: true,
	},
);

// add plugin that converts mongoose to json
subscribersSchema.plugin(toJSON);

/**
 * @typedef Subscribers
 */
const Subscribers = mongoose.model('Subscribers', subscribersSchema);

module.exports = Subscribers;
