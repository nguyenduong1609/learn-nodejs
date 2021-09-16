const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class MeController {
  // [GET] /me/stored/khoahoc
  storedKhoahoc(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
      ([khoahoc, countDeleted]) =>
        res.render('me/storedKhoahoc', {
          countDeleted,
          khoahoc: mutipleMongooseToObject(khoahoc),
        })
    );

    // Course.find({})
    //   .then((khoahoc) => {
    //     res.render('me/storedKhoahoc', {
    //       khoahoc: mutipleMongooseToObject(khoahoc),
    //     });
    //   })
    //   .catch(next);

    // Course.countDocumentsDeleted()
    //   .then((countDeleted) => console.log(countDeleted))
    //   .catch(() => {});
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
