//server/routes/routes.js
var express = require('express');
var router = express.Router();
var axios = require('axios');
const url= 'https://api.github.com/';
router.get('/', function(req, res){
  res.render('index')
});
router.get('/api/user', function(req, res){
  axios.get(url+'users/bilalalam173/repos').then((data)=>{
    res.send(data.data);
  })
  .catch(error => {
    console.log(error);
  });
});

module.exports = router;