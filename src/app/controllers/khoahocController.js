const { mongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class khoahocController {
  //[GET] /khoahoc/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((khoahoc) => {
        res.render('khoahoc/show', { khoahoc: mongooseToObject(khoahoc) });
      })
      .catch(next);
  }

  //[GET] /khoahoc/create
  create(req, res, next) {
    res.render('khoahoc/create');
  }

  //[POST] /khoahoc/store
  store(req, res, next) {
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.videoID}/0.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {});
  }

  //[GET] /khoahoc/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((khoahoc) => {
        res.render('khoahoc/edit', { khoahoc: mongooseToObject(khoahoc) });
      })
      .catch(next);
  }

  //[PUT] /khoahoc/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/khoahoc'))
      .catch(next);
  }

  //[PATCH] /khoahoc/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[DELETE] /khoahoc/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[DELETE] /khoahoc/:id/norestore
  deletenorestore(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}
module.exports = new khoahocController();
