const express = require('express');
const app = express();
const port = 5000;
const user = require('./routes/users');

 

app.use(express.json())
app.use('/api', user)
// SERVER LISTEN ON PORT 5000
app.listen(port, (err) => {
  if(err){
    throw err
  } else {
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port)
}
})