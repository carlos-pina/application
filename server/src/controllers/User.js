const User = require('../models/User')

module.exports = {
  getUser (req, res) {
    const userId = req.params.id

    User.findById(userId, (err, user) => {
      if (err) {
        res.status(500).send({
          message: 'Error en la petición'
        })
      }

      if (!user) {
        res.status(404).send({
          message: 'Usuario no existe'
        })
      }

      res.status(200).send({
        message: 'Usuario encontrado'
      })
    })
  }
}
