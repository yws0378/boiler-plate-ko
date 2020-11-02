const express = require('express')
const app = express()
const port = 5000
const bodyParser =require("body-parser");

const config =require('./config/key');
const {User} = require("./models/User");

//application/x-www-form-rulencded 를 분석하여 가져옴
app.use(bodyParser.urlencoded({extended:true}));

//application/json 정보 호출
app.use(bodyParser.json());

const mongoose = require('mongoose')
//mongoose.connect('mongodb+srv://Uoco:ws1004@cluster0.jd1ro.mongodb.net/test?retryWrites=true&w=majority',{ //여기서 whit... 에러나면 ip 거부 에러라 mongodb.com에서 ip입력해주면 해결됨
mongoose.connect(config.mongoURI,{  
useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false         
}).then(() => console.log('MongoDB Connection..'))
.catch(err => console.log(err))

app.get('/', (req, res) => { res.send('Hello World!')})

app.post('/register',(req,res) => {
  
    //회원 가입 할 때 필요한 정보들을 clinet에서 가져오면 그것들을 데이터 베이스에 넣어준다.

    const user =  new User(req.body)

    user.save((err,userinfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true

        })
    })


})
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})