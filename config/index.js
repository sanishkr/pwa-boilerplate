module.exports = {
  development: {
    api: 'https://jsonplaceholder.typicode.com',
  },
  stage: {
    api: 'https://api.stage.com',
  },
  production: {
    api: 'https://jsonplaceholder.typicode.com',
  },
}[process.env.NODE_ENV];
