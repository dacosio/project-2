
const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sprout API',
      version: '1.0.0',
    },
  },
  servers: [{
    url: "http://localhost:3500",
  }],
  apis: ['./routes*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
    specs
}