import {Router} from 'express';
let router=Router();

//get user info
router.get('/userinfo/:id',(req,res)=>{
    res.send({"Hello":"World"})
})

//create user
router.post('/userInfo/:id',(req,res)=>{
    res.send({"Hello":"World"})
})

// delete profile 
router.delete('/userInfo/:id',(req,res)=>{
    res.send({"Hello":"World"})
})

export default router