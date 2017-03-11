var liveServer = require('live-server')
console.log("Starting up...")

var params = {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    ignore: 'styles, node_modules, build',
    file: 'index.html',
    wait: 500,
    logLevel: 2
}

liveServer.start(params)


