const express = require('express')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')

const app = express()


app.use('/', express.static('public'))
app.use(fileUpload())
app.post('/extract-text', async (req, res) => {
  try {  if(!req.files && !req.files.uploadedPdfFile){
      res.status(400)
      res.end()
    }
    const response = await pdfParse(req.files.uploadedPdfFile)
    res.send(response.text) }
  catch(error) {
    if(error) {
      res.send('file is required!')
    }
  }
})

app.listen(3000, () => {
  console.log(`Backend Server started running at Port 3000`)
})