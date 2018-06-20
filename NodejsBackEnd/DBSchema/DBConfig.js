const mongoose = require('mongoose');
const wardSchema = require('./wardSchema');

const patientAdmissionSchema = require('./patientWardAdmissionSchema');
const patientRegSchema = require('./patientRegistrationSchema');

const userSchema = require('./userSchema');
const laborityTestSchema = require('./laborityTestSchema');



mongoose.connect('mongodb://127.0.0.1:27017/Inward', err =>{
    if(err) {
        console.error(err);
        process.exit(-2);
    }
    console.log('Connected to mongoDB on PORT 27017');
});

mongoose.model('wardDetails',wardSchema);

mongoose.model('patientWardAdmission',patientAdmissionSchema);
mongoose.model('patientRegistration',patientRegSchema);
<<<<<<< HEAD
mongoose.model('laborityTest' , laborityTestSchema);
=======

>>>>>>> c90026565267e8abcc5e12aa022e989fdb6b80fa
mongoose.model('User' , userSchema);



module.exports = mongoose;