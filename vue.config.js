module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'http://zerzoul.com/admin-system/' 
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/aqua-helper'
  : '/'
}