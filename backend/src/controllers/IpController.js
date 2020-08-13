let extIP = require('ext-ip')();

module.exports = {
  async index(req, res) {
    extIP.get().then(
      ip => {
        return res.status(200).json({
          ip: ip
        });
      },
      err => {
        return res.status(404).json({
          error: ''
        });
      }
    );

    return res.status(200);
  }
};
