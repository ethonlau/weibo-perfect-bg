module.exports = {
  indexPath: '../index.html',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/weibo-perfect-bg/dist/'
    : '/'
}