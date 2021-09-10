class NewsController {
  //[GET] /news
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("DAY LA TRANG SLUG");
  }
}
module.exports = new NewsController;
