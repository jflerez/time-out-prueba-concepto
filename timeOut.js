module.exports = (req, res, next) => {
    if (!req.timedout) next()
  }