//delete deleteMany
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/login").then(()=>{console.log("Successful555")}).catch((err)=>{console.error(err)})
mg.pluralize(null)
const mySchema=new mg.Schema({
    name:{
        type:"String",
        required:true
    },
    surname:"String"})
const person=new mg.model("Play",mySchema)
const deleteDoc=async(_id)=>{
    const result=await person.deleteMany(
{
    surname:"abc"
})
console.log(result)
}
deleteDoc("64d1ffc9852bc3557d7fa789")
