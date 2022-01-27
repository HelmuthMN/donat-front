function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();

app.use(express.static('./dist/donat-front'));

app.get('/*', function(req, res) {
  res.sendFile(`index.html`, {root: 'dist/donat-front/'});
});

app.listen(process.env.PORT || 8080);