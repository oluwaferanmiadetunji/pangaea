const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const topicsSchema = mongoose.Schema(
	{
		topic: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		subscribers: {
			type: Array,
		},
	},
	{
		timestamps: true,
	},
);

// add plugin that converts mongoose to json
topicsSchema.plugin(toJSON);

/**
 * @typedef Topics
 */
const Topics = mongoose.model('Topics', topicsSchema);

module.exports = Topics;
