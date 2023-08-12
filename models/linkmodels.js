const mongoose=require('mongoose')

const linkTemplet=new mongoose.Schema({
    link :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
                             //collection_name->test
module.exports=mongoose.model('link',linkTemplet)