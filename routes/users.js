var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
    // res.writeHead(404, header);
    // res.write(JSON.stringify({
    //   "status": "false",
    //   "data": "無此網狀路由"
    // }));
    // res.end();
});

module.exports = router;
