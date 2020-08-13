let extIP = require('ext-ip')();

module.exports = {
  async index(req, res) {
    var forwardedIpsStr = req.header('x-forwarded-for');
    if (forwardedIpsStr) {
      // 'x-forwarded-for' header may return multiple IP addresses in
      // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
      // the first one
      const forwardedIps = forwardedIpsStr.split(',');
      const ipAddress = forwardedIps[0];

      res.statusCode = 200;

      if (req.query.format === 'json') {
        return res.json({
          ip: ipAddress
        });
      } else {
        return res
          .set('Content-Type', 'text/html')
          .send(`<pre>${ipAddress}</pre>`);
      }
    } else {
      extIP.get().then(
        ip => {
          res.statusCode = 200;
          if (req.query.format === 'json') {
            return res.json({
              ip: ip
            });
          } else {
            return res
              .set('Content-Type', 'text/html')
              .send(`<pre>${ip}</pre>`);
          }
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
