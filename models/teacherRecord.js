const mongoose = require('mongoose');

const TeacherRecord = mongoose.Schema({
    name: {type: String, required: true},
    email_id : {type: String, required: true},
    age : {type: String, required: true},
    phone_no : {type: String, required: true},
    employee_code : {type: String, required: true},
    address : {type: String, required: true},
    qualification : {type: String, required: true},
    department : {type: String, required: true},
    designation : {type: String, required: true}

});

module.exports =  mongoose.model('TeacherRecord', TeacherRecord);
