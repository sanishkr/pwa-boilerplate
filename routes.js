const routes = require('next-routes')();

routes
  .add({ name: 'default', pattern: '/', page: 'index' })
  .add({ name: '404', pattern: '/404', page: '404' })
  .add({ name: 'posts', pattern: '/posts', page: 'posts' });

module.exports = routes;
