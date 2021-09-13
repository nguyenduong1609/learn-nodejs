const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then((khoahoc) => {
        // khoahoc = khoahoc.map((x) => x.toObject());
        res.render('home', {
          khoahoc: mutipleMongooseToObject(khoahoc),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
