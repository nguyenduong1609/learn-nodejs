const newsRouter = require('./news');
const siteRouter = require('./site');
const khoahocRouter = require('./khoahoc');
const meRouter = require('./me');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/khoahoc', khoahocRouter);
  app.use('/me', meRouter);

  app.use('/', siteRouter);
}

module.exports = route;
