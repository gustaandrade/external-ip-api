let extIP = require("ext-ip")();

module.exports = {
  async index(req, res) {
    const obj = {
      ip: ""
    };

    extIP.get().then(
      ip => {
        console.log(ip);
        obj.ip = ip;
      },
      err => {
        console.error(err);
      }
    );

    return res.json(obj);
  }
};
