const User = require('../models/User')

module.exports = {
  async setUser (req, res) {
    try {
      const user = new User(req.body)
      await user.save()
      const token = await user.generateAuthToken()
      res.status(201).send({
        user, token
      })
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async loginUser (req, res) {
    try {
      const { email, password } = req.body
      const { error, user } = await User.findByCredentials(email, password)
      if (error) {
        return res.status(401).send({
          error
        })
      }
      const token = await user.generateAuthToken()
      res.send({ user, token })
    } catch (error) {
      res.status(400).send(error)
    }
  },
  profileUser (req, res) {
    res.send(req.user)
  },
  async logoutUser (req, res) {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
      })
      await req.user.save()
      res.send()
    } catch (error) {
      res.status(500).send(error)
    }
  },
  async logoutallUser (req, res) {
    try {
      req.user.tokens.splice(0, req.user.tokens.length)
      await req.user.save()
      res.send()
    } catch (error) {
      res.status(500).send(error)
    }
  }
}
