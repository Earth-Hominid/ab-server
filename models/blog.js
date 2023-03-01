const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Title needs a text value'],
      min: 1,
      max: 50,
    },
    content: {
      type: String,
      required: [true, 'Content needs a text value'],
      min: 2,
    },
    publish: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);
