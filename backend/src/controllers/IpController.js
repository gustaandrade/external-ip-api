let extIP = require('ext-ip')();

module.exports = {
  async index(req, res) {
    extIP.get().then(
      ip => {
        res.statusCode = 200;
        return res.json({
          ip: ip
        });
      },
      err => {
        res.statusCode = 404;
        return res.json({
          error: err
        });
      }
    );

    return res.status(200);
  }
};
