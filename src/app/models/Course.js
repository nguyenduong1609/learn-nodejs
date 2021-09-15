const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mongoose_delete = require('mongoose-delete');
var slug = require('mongoose-slug-generator');

const Course = new Schema(
  {
    name: { type: String, default: 'hahaha' },
    description: { type: String, maxlength: 600 },
    img: { type: String, maxlength: 300 },
    videoID: { type: String, maxlength: 300 },
    lever: { type: String, maxlength: 300 },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
);

//add plugins
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('khoahoc', Course);
