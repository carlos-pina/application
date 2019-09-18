module.exports = {
  port: process.env.PORT || 8081,
  db: {
    url: process.env.DB_URL || 'mongodb://127.0.0.1:27017/application'
  }
}
