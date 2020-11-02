const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Uoco:ws1004@cluster0.jd1ro.mongodb.net/test?retryWrites=true&w=majority',{ //여기서 whit... 에러나면 ip 거부 에러라 mongodb.com에서 ip입력해주면 해결됨
    useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false         
}).then(() => console.log('MongoDB Connection..'))
.catch(err => console.log(err))




app.get('/', (req, res) => { res.send('Hello World!')})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})