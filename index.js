require('dotenv').load();

const koa = require('koa');

// const Jade = require('koa-jade');
// const bodyParser = require('koa-bodyparser');
// const router = require('./routes');
var app = koa();

// const jade = new Jade({
//   viewPath: 'templates/views',
//   debug: false,
//   pretty: false,
//   compileDebug: false,
//   locals: {},
//   basedir: './templates'
// });

app.use(require('koa-static')('public'));
// // app.use(jade.middleware);
// // app.use(bodyParser());

// app.use(router.routes())
//   .use(router.allowedMethods());

var server = app.listen(process.env.PORT||3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Koa server listening at http://%s:%s', host, port)
});
