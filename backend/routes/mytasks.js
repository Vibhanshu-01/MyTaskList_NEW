const { MyTask } = require("../models/mytask")
const auth = require("../middleware/auth")
const express = require("express")
const Joi = require("joi")

const router = express.Router()


router.get("/" , auth , async(req,res,next) => {
    try{
        const mytasks = await MyTask.find(mytask => mytask.uid===req.user._id)
        .sort({date :-1})
        const filteredMytasks = mytasks.filter()
        res.send(filteredMytasks)
    } catch(error){
        res.status(500).send(error.message);
        console.log(error.message)
    }
})





router.delete("/:id" , auth , async(req, res)=> {
    try{
    const mytask = await MyTask.findById(req.params.id);

    if(!mytask) return res.status(404).send("MyTask not found ..")

    if(mytask.uid !== req.user._id) return res.status(401).send("Task deletion Failed . Not Authorized")
    
        const deletedMyTask = await MyTask.findByIdAndDelete(req.params.id);

        res.send(deletedMyTask);
    } catch( error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
})



router.put("/:id" , auth , async(req, res)=> {
    const schema = Joi.object({
        name : Joi.string().required(),
        author: Joi.string(),
        uid: Joi.string(),
        isComplete : Joi.boolean(),
        date: Joi.date()

    })


    const {error} = schema.validate(req.body);
    
    if(error) return res.status(400).send(error.details[0].message);
    try{
    const mytask = await MyTask.findById(req.params.id);

    if(!mytask) return res.status(404).send("MyTask not found ..")

    if(mytask.uid !== req.user._id) return res.status(401).send("Task Update Failed . Not Authorized")

    const {name , author , isComplete , date, uid} = req.body ;

    
        const updatedMyTask  = await MyTask.findByIdAndUpdate(
            req.params.id , {name , author , isComplete , date, uid} 
            , {new : true}
        );
        res.send(updatedMyTask);
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
})



router.patch("/:id" , auth ,  async(req ,res)=> {
    try{
    const mytask = await MyTask.findById(req.params.id);

    if(!mytask) return res.status(404).send("MyTask not found ..")

    if(mytask.uid !== req.user._id) return res.status(401).send("Task Update Failed . Not Authorized")
    
        const updatedMyTask = await MyTask.findByIdAndUpdate(req.params.id , {
            isComplete : !mytask.isComplete
        }, {new: true })
        res.send(updatedMyTask);
    } catch(error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
})



router.post("/" , auth , async (req, res) =>{
    const schema = Joi.object({
        name : Joi.string().required(),
        author: Joi.string(),
        uid: Joi.string(),
        isComplete : Joi.boolean(),
        date: Joi.date()

    })


    const {error} = schema.validate(req.body)
    
    if(error) return res.status(400).send(error.details[0].message)

    const {name , author , isComplete , date, uid} = req.body ;

    let mytask = new MyTask({
        name, author, isComplete , date , uid
    });
    try{
        mytask = await mytask.save();
        res.send(mytask);
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
});


module.exports = router