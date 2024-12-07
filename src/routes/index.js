const auth = require('./auth.js')
const project = require('./project.js')

const routes = app => {
    auth(app)
    project(app)
}

module.exports = routes