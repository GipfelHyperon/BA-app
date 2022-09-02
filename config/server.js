module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['8G9lFEF53z8IAuYilfv5yw==', 'YwuLyw4qhhH9c1J7NQrvBA==', 'FJthB3Kt/tF2BH3QPXOyLQ==', 'Yv+HSCy4o9iX27q1EAOdPg==']),
  },
});
