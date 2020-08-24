const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const path = require('path');

const TeacherRecord = require('../models/teacherRecord');
const db = require('../config/db');

mongoose.connect(db.url);
const con = mongoose.connection;

con.on('error',()=>{
    console.log('Connection Error');
});

router.get('/teacherRecordManagement', (req,res) =>{
    res.sendFile(path.join(__dirname,'../public/teacherRecord.html'));
});

router.get('/get-teacherRecords',(req,res)=>{
    TeacherRecord.find().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log(err);
    });
});

router.post('/update-teacherRecord',(req,res)=>{

    TeacherRecord.updateOne({_id: req.body._id},{
        name: req.body.name,
        email_id: req.body.email_id,
        age: req.body.age,
        phone_no: req.body.phone_no,
        employee_code: req.body.employee_code,
        address: req.body.address,
        qualification: req.body.qualification,
        department: req.body.department,
        designation: req.body.designation}, (err,doc)=>{
        if(err){
            console.log(err);
            res.json({
                msg: 'Error',

            });
        }else{
            console.log(doc);
            res.json({
                msg: 'Record is updated',
                obj: doc
            });
        }
    });
});

router.post('/add-teacherRecord', (req,res)=>{
   console.log(req.body);
   const record = new TeacherRecord({
      name: req.body.name,
      email_id: req.body.email_id,
      age: req.body.age,
      phone_no: req.body.phone_no,
      employee_code: req.body.employee_code,
      address: req.body.address,
      qualification: req.body.qualification,
      department: req.body.department,
      designation: req.body.designation
   });
   record.save().then((result)=>{
       res.json({
           msg: 'Record is added',
           obj: result
       });
   });

});

router.post('/delete-teacherRecord',(req,res)=>{
    TeacherRecord.deleteOne({_id: req.body._id}, (err,doc)=>{
        if(err) {
            console.log(err);
            res.json({
                msg: 'Error',
            });
        }else{
            res.json({
               msg: 'Record Deleted',
            });
        }
    });
});


module.exports = router;

