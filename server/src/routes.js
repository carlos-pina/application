const JobController = require('./controllers/Job')
const UserController = require('./controllers/User')
const CategoryController = require('./controllers/Category')
const auth = require('./middleware/auth')

module.exports = (app) => {
  app.get('/jobs', JobController.getJobs)
  app.get('/jobs/:jobId', JobController.getJobById)
  app.get('/jobs/s/:subcategoryId', JobController.getJobBySubCategory)
  app.post('/jobs', JobController.setJob)
  app.put('/jobs', JobController.putJob)
  app.delete('/jobs/:jobId', JobController.deleteJob)

  app.post('/users', UserController.setUser)
  app.post('/users/login', UserController.loginUser)
  app.get('/users/profile', auth, UserController.profileUser)
  app.post('/users/logout', auth, UserController.logoutUser)
  app.post('/users/logoutall', auth, UserController.logoutallUser)

  app.get('/categories', CategoryController.getCategories)
}
