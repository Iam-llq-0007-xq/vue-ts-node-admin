const history = require('connect-history-api-fallback');

const connectHistory = history({
  verbose: true,
  disableDotRule: false,
  index: 'companyName/index.html',
  logger: console.log.bind(console),
  rewrites: [],
});

module.exports = connectHistory;
