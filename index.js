const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const mailer = require('./nodemailer')

app.use(bodyParser.urlencoded({ extended: false }))
app.post('/helpdesk', (req, res) => {
    if(!req.body.userName || !req.body.userEmail || !req.body.userQuestion) return res.status(400)
    const message = {
        from: `${req.body.userName} <${req.body.userEmail}>`,
        subject: `${req.body.topic}`,
        text: `${req.body.userQuestion}`
    }
    mailer(message)
    res.redirect('/helpdesk')
})

app.get('/helpdesk', (req, res) => {
    res.sendFile(__dirname + '/helpDeskForm.html')
  })
  

app.listen(PORT, () => {
  console.log(`Server has started on http://localhost:3000/helpdesk ...`)
})
