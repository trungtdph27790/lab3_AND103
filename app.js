const express = require('express');
const mongoose = require('mongoose');
const sinhvienRouter = require('./routes/sinhvienRoute');
const bodyParser = require('body-parser');
// tạo server
const app = express();
//
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

// kết nối mongodb
mongoose.connect('mongodb://0.0.0.0:27017/AND103')
.then(()=>{
    console.log('kết nối thành công');
})
.catch((err)=>{
    console.log('Lỗi'+err);
});

// dung router
app.use('/sinhvien',sinhvienRouter);
// su dung engine


//chay server
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log('server dang chay cong 3000');
})
