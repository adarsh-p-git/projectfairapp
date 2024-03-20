const express=require('express');
 const router =new express.Router();
 const userController=require('../Controller/userController');
 const projectController=require('../Controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddleware');


 router.post('/user/register',userController.register)


 router.post("/user/login",userController.login);

 //add project

router.post("/projects/add",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

//get user project

router.get('/user/allprojects',jwtMiddleware,projectController.allUserprojects)

//get all projects

router.get('/projects/all',jwtMiddleware,projectController.allProjects)


//home projects

router.get('/projects/homeprojects',projectController.getHomeProjects)









 

//export router
 module.exports=router