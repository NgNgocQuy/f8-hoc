const express = require("express")
const app = express()
const port = 3000

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.listen(port, () => console.log("local host 3000"))