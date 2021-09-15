const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class MeController {
  // [GET] /me/stored/khoahocs
  storedKhoahoc(req, res, next) {
    Course.find({})
      .then((khoahoc) => {
        res.render('me/storedKhoahoc', {
          khoahoc: mutipleMongooseToObject(khoahoc),
        });
      })
      .catch(next);
  }

  // [GET] /me/recycle/khoahocs
  recycleKhoahoc(req, res, next) {
    Course.findDeleted({})
      .then((khoahoc) => {
        res.render('me/recycleKhoahoc', {
          khoahoc: mutipleMongooseToObject(khoahoc),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
