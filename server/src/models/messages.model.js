const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const messagesSchema = mongoose.Schema(
	{
		topic: {
			type: String,
			required: true,
			trim: true,
		},
		data: mongoose.Mixed,
	},
	{
		timestamps: true,
	},
);

// add plugin that converts mongoose to json
messagesSchema.plugin(toJSON);

/**
 * @typedef Messages
 */
const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;
