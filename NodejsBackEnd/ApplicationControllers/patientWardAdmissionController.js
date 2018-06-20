var mongoose    = require('../DBSchema/DBConfig');
var patientWardAdmissionSchema 	= mongoose.model('patientWardAdmission');

var patientWardAdmissionController= function () {
    this.addWardAdmission=function (wardAdmission) {
        return new Promise(function (resolve,reject) {
            var wardAdmission=new patientWardAdmissionSchema({
                BHTNumber:wardAdmission.BHTNumber,
                wardNo:wardAdmission.wardNo,
                bedNumber:wardAdmission.bedNumber,
                patientId:wardAdmission.patientId,
                patientName:wardAdmission.patientName,
                admittedDate:wardAdmission.admittedDate,
                admittedTime:wardAdmission.admittedTime,
                DoctorInCharge:wardAdmission.DoctorInCharge,
                patientComplain:wardAdmission.patientComplain
            })
            wardAdmission.save().then(function () {
                resolve({'status':200,'message':'patient is admitted'})
            }).catch(function (err) {
                reject({'status':500,'message':'patient admission in unsuccesful '+ err})
            })
        })
    };

    this.removeAdmission=function (id) {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.delete({_id:id}).then(function () {
                resolve({'status':200,'message':'Admissin is deleted'})
            }).catch(function (err) {
                reject({'status':500,'message':'Admission cannot be deleted '+ err})
            })
        })
    };

    this.updateAdmission=function (id,updateData) {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.update({_id:id},updateData).then(function () {
                resolve({'status':200,'message':'Admission details are updated'})
            }).catch(function (err) {
                reject({'status':500,'message':'Admission updating is unsuccesfull '+err})
            })
        })
    };

    this.getAllAdmissions=function () {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.find().exec().then(function (data) {
                resolve({'status':200,'message':'All Admissions ', 'data':data})
            }).catch(function (err) {
                reject({'status':404,'message':'cannot find Admissions '+err})
            })
        })
    };

    this.getOneAdmission =function (id) {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.find({_id:id}).exec().then(function (data) {
                resolve({'status':200,'message':'Admission','data':data})
            }).catch(function (err) {
                reject({'status':404,'message':'cannot find Admission '+err})
            })
        })
    };
}

module.exports=new patientWardAdmissionController();