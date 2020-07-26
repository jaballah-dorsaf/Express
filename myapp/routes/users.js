const express = require('express');
const router = express.Router();
const users = require('./users')

//GET ALL USERS
router.get('/users',(req, res)=> {
  res.json(users)
})

//DELETE ONE USERS
router.delete('/users/:id', (req, res) =>{
  let user = users.filter(user => user.id !== parseInt(req.params.id))
  res.json(user)
})
//ADD NEW USER
router.post('/users', (req, res)=> {
  res.json(users.concat(req, body)) 
})
//EDIT USER
router.put('/users/:id', (req, res) => {
  res.json(users.map(el => el.id === parseInt(req.params.id) ? {...req.body, id: el.id} : el))
})




module.exports = router;
