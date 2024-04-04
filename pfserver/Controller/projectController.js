
const projects =require('../Models/projectSchema')


 exports.addProjects =async (req,res)=>{
    console.log("inside add project function")
    const userId=req.payload
    const projectImage=req.file.filename
    const {title,languages,github,website,overview}=req.body
    //console.log(` ${title} ,${languages} ,${github} ,${website} ,${overview} ,${projectImage},${userId}`)
   

    try {

        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json('project already exists ...upload another one')
        }
        else{
            const newProject=new projects({
    
        title,languages,github,website,overview,projectImage,userId  
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
        
    } catch (error) {
        res.status(401).json(`Request failed $(error)`)
    }
}


//get projects

exports.allUserprojects=async(req,res)=>
{
    const userId=req.payload
    try{
        const userProjects=await projects.find({userId})
        res.status(200).json(userProjects)

    }
    catch(error)
    {
        res.status(401).json(error)

    }
}

//getall projects

exports.allProjects=async(req,res)=>{
const searchKey=req.query.search
const query={
    languages:{$regex:searchKey,$options:'i'}
}
    try {

        const allProjects=await projects.find(query)
        res.status(200).json(allProjects)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//home projects

exports.getHomeProjects=async(req,res)=>{

    try {

        const homeProjects=await projects.find().limit(3)
        res.status(200).json(homeProjects)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//edit projects

exports.editProjectController=async(req,res)=>
{
    //get project id
    console.log(req.body)
    const { id }=req.params
    const userId=req.payload
    const {title,languages,github,website,overview,projectImage}=req.body
    const uploadProjectImage=req.file?req.file.filename:projectImage

    try{
        const updateProject =await projects.findByIdAndUpdate({_id:id},{
            title,languages,github,website,overview,projectImage:uploadProjectImage,userId
        },
        {new: true })
        await updateProject.save()
        res.status(200).json(updateProject)
        console.log("response",res)
    }catch(error)
    {
        res.status(401).json(error)
        console.log("error",error)
    }

}

//delete project controller

exports.deleteProjectController = async (req, res) => {
    const { id } = req.params
    try {
        const removeProject = await projects.findByIdAndDelete({ _id: id })
        res.status(200).json(removeProject)
    } catch (err) {
        res.status(401).json("delete failed", err)
    }
}