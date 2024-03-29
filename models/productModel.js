const mongoose=require('mongoose')
const productSchema = new mongoose.Schema({
    productname: {
        type:String
    },
    productprice: {
        type:Number
    },
    productquadity: {
        type:Number
    },
    productimage: {
        type:Array
    },
    categoryId: {
        // type:mongoose.Schema.Types.ObjectId,
        // ref:"category"
        type:String
    },
    productdescription:{
        type:String
    },
    isListed: {
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model('products',productSchema)