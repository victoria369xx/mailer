const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport(
    
{
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, //true for 465, false for others
    auth: {
        user: 'big_bang369@mail.ru',
        pass: 'y2iCTzkAWfhXDcAv7BT6'
    }
},
    {
        to: 'big_bang369@mail.ru'
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.error(err)
        console.log(`Email sent: `, info)
    })
}

module.exports = mailer