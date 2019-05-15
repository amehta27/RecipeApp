const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
const bodyParser = require('body-parser')
const PORT = 8080


app.use(bodyParser.json())
app.use(cors())

let receipe = [{title: 'Fettucinne Afredo', category:'Itlian', description:"description"},
{title:'Lazania', category:'Italian', description:'description2'}]





app.post('/api/receipes',(req,res)=> {

  let category = req.body.category
  let title = req.body.title
  let description = req.body.description

  let receipe = models.Receipe.build({
    category : category,
    title : title,
    description : description
   })

   receipe.save().then((savedBook) => {
     if (savedBook) {
       res.json({success: true})
     } else {
      res.json({success:false, message : 'Error saving Book'})
     }
     
   
})

})  

app.get ('/api/categories/:categoryName', (req,res) => {
  // res.send(receipe)
  let category = req.params.categoryName
    models.Receipe.findAll({
      where : {
        category:category
      }
  })
  .then((categories) => res.json(categories))

  })


// findAll({
//   where: {
//     category: value
//   }
// })
app.get ('/api/receipes', (req,res) => {
    // res.send(receipe)
    let receipes = models.Receipe.findAll()
    .then((receipes) => res.json(receipes))
     console.log(receipes)

})

app.listen(PORT,() => {
    console.log('Server is running...')
  })