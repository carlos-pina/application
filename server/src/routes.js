const JobController = require('./controllers/Job')
const UserController = require('./controllers/User')
const auth = require('./middleware/auth')

module.exports = (app) => {
  app.get('/jobs', JobController.getJobs)
  app.get('/jobs/:jobId', JobController.getJob)
  app.post('/jobs', JobController.setJob)
  app.put('/jobs', JobController.putJob)
  app.delete('/jobs/:jobId', JobController.deleteJob)

  app.post('/users', UserController.setUser)
  app.post('/users/login', UserController.loginUser)
  app.get('/users/profile', auth, UserController.profileUser)
  app.post('/users/logout', auth, UserController.logoutUser)
  app.post('/users/logoutall', auth, UserController.logoutallUser)
}
