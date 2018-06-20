const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientWardAdmissionSchema =new Schema({
    BHTNumber:{
        type: Number,
        require:true
    },
    wardNo:{
        type: Number,
        require:true
    },
    bedNumber:{
        type: String,
        require:true
    },
    patientId:{
        type: Number,
        require:true
    },
    patientName:{
        type: String,
        require:true
    },
    admittedDate:{
        type: String,
        require:true
    },
    admittedTime:{
        type: String,
        require:true
    },
    DoctorInCharge:{
        type: String,
        require:true
    },
    patientComplain:{
        type: String,
        require:true
    }

})

mongoose.model('patientWardAdmission',patientWardAdmissionSchema);

module.exports = patientWardAdmissionSchema;
