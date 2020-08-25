const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
module.exports = { path: '/api/send', handler: app }


app.use(bodyParser.json());

app.post('/', (req, res) => {

        const sendemail = require('gmail-send')({
                user: 'l.kapluk@itecriocuarto.org.ar',
                pass: 'lyde.12.red.red.hot',
                to:   'kaplukluciano@gmail.com',
                subject: req.body.subject,
        });

        sendemail({
                text:  'Name: '+ req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,  
                }, (error, result, fullResult) => {
                        if(error){
                                console.log(error)
                                return res.sendStatus(500)
                        }else{
                                console.log(result)
                                return res.sendStatus(200)
                                
                        }
                        
       
        })  

       
      
})

export default {
        path: '/api/send',
        handler: app
      }