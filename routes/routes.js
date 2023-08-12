const express=require('express')
const linkTempletCopy=require("../models/linkmodels")

const router=express.Router();

router.post('/link',function(req,res){
    const link=new linkTempletCopy({
        link: req.body.link,
    });
    link.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

router.route('/link').get((req,res) => {
    linkTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

module.exports=router; 