let extIP = require('ext-ip')();

module.exports = {
  async index(req, res) {
    var forwardedIpsStr = req.header('x-forwarded-for');

    if (forwardedIpsStr) {
      // 'x-forwarded-for' header may return multiple IP addresses in
      // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
      // the first one
      var forwardedIps = forwardedIpsStr.split(',');
      ipAddress = forwardedIps[0];

      res.statusCode = 200;
      return res.json({
        ip: ipAddress
      });
    } else {
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
    }
    return res.status(200);
  }
};
