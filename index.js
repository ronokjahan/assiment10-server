const express = require('express')
const app = express()
const port = 3000
const catagory=require('./catagory.json')
const cors=require('cors')
app.use(cors())
const news=require('./news.json')
const fack=require('./fack.json')
const chef=require('./chef.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const chefs=require('./Chefdetails.json')

app.get('/news/:id', (req, res) => {
  const id=req.params.id
  console.log(id);
  const allnes=news.find(n=>n._id===id)
  res.send(allnes)
})
app.get('/catagory', (req, res) => {
  res.send(catagory)
})
app.get('/chef', (req, res) => {
  res.send(chef)
})
app.get('/Chefdetails', (req, res) => {
  res.send(chefs)
})
app.get('/Chefdetails/:id', (req, res) => {
  const id=req.params.id
  console.log(id);
  const alldata=chefs.find(ns=>ns.id==id)
  console.log(alldata);
  res.send(alldata)
  
})
// -----------------------------------
app.get('/chef/:id', (req, res) => {
  const id=req.params.id
  console.log(id);
 

  const chefss=chefs.filter(n=>n.id==id)
  res.send(chefss)

})




// --------------------------------------------
app.get('/news', (req, res) => {
  res.send(news)
})
app.get('/fack', (req, res) => {
  res.send(fack)
})
app.get('/catagory/:id', (req, res) => {
  const newsss=req.params.id
  if(newsss==0){
    res.send(news)
  }
else{
  const newss=news.filter(n=>n.category_id==newsss)
  res.send(newss)
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})