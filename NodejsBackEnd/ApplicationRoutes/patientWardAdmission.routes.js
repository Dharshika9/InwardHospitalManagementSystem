var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/patientWardAdmissionController');

router.post('/',function (req,res) {
    controller.addWardAdmission(res.body).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.delete('/:id',function (req,res) {
    controller.removeAdmission(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.put('/:id',function (req,res) {
    controller.updateAdmission(req,params.id,req.body).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.get('/',function (req,res) {
    controller.getAllAdmissions().then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});


router.get('/:id',function (req,res) {
    controller.getOneAdmission(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(resD.message)
    })
})


module.exports=router;