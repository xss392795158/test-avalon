const express = require('express');
const router = express.Router();

/* router.get('/testAjax', (req, res) => {
  console.log('get!!@@@@@@@@@@@@@@@@@@@@')
  res.json(
    {
      code: 200,
      data: {
        name: 'xss',
        age: 23
      },
      message: 'success'
    }
  )
}) */
router.post('/testAjax', (req, res) => {
  let params = req.body||{};
  let queryParams = req.query;

  if(queryParams) {
    for(var key in queryParams){
      if(queryParams.hasOwnProperty(key)){
        params[key] = queryParams[key];
      }
    }
  }
  
  res.json(
    {
      code: 200,
      data: {
        name: 'xss',
        age: 23
      },
      message: 'success'
    }
  )
})

module.exports = router;
