const express = require('express');
const router = express.Router();
const sinhvien = require('../models/sinhvienModel');

// định nghĩa api
// http://localhost:3000/sinhvien
router.get('/',async (req,res)=>{
    try {
        const sinhviens = await sinhvien.find(); // đọc dữ liệu

        // res.json(sinhviens);

        res.render('sinhviens',{sinhviens: sinhviens});

        console.log(sinhviens);
    } catch (error) {
        console.log(error); // trả về lỗi
        res.status(500).json({error:'Internel Server Error'})
    }
});
// định nghĩa POST 
router.post('/',async(req,res)=>{
    try {
        const {id,name} = req.body ;
        const sinhvien1 = new sinhvien({id,name}) ;
        await sinhvien1.save() 
        res.status(201).json(sinhvien1);
    } catch (error) {
        console.log(error);
    }
})
// định nghĩa PUT
router.put('/:_id',async (req,res)=>{
    try {
        const {_id} = req.params ;
        const {name,id} = req.body ;
        const updateSinhvien =  await sinhvien.findByIdAndUpdate(_id,{id,name},{new: true});
        res.json(updateSinhvien);
    } catch (error) {
        console.log(error);
    }
})

// export 
module.exports = router ;