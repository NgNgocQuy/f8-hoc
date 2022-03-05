const res = require("express/lib/response")
const project = require("../model/project")
const Project = require("../model/project")
const fs = require("fs")
const path = require("path")
const Persional = require("../model/persional")
class mainController{

    async home(req, res, next){
        try {
            let projects = await project.find()
            projects = projects.map(projects => projects.toObject())
            console.log(projects);
            res.render("home", {projects}) 
        } catch (error) {
            res.send("status: err")
        }
    }

    myCv(req,res){
        res.render("cv/myCv")
    }

    async addPersional(req,res){
        if(Persional.find({PersionalId: req.body.PersionalId})){
            res.send("Id đã tồn tại .")
        }else{
            let savePersional = new Persional({
                PersionalName: req.body.PersionalName,
                PersionalContent: req.body.PersionalContent,
                PersionalId: req.body.PersionalId
            })
            let savedPersional = await savePersional.save()
            console.log(savedPersional);
            res.json(savedPersional)
        }
        
    }

    async editCv(req,res){
        
        let saveProject = new Project({
            ProjectId: req.body.ProjectId,
            Name: req.body.Name,
            Image: req.body.Image,
            Link: req.body.Link,
            Github: req.body.Github,
        })
        let savedProject = await saveProject.save()
        console.log(savedProject);

        res.render("cv/editCv")
    }
    async updateCvProject(req,res){ //update use query
        let updateProject = await Project.findOne({ProjectId: req.body.ProjectId}).exec()
        updateProject.ProjectId= req.body.ProjectId,
        updateProject.Name= req.body.Name,
        updateProject.Image= req.body.Image,
        updateProject.Link= req.body.Link,
        updateProject.Github= req.body.Github,
        updateProject.Status= req.body.Status,
        updateProject.Decription= req.body.Decription
        
        // let savedProject = await saveProject.save()
        let updatedProject = await updateProject.save()
        console.log("Updated: "+ updatedProject);

        res.json(updateProject)
    }

    // async readPdf(req, res){
    //     const path = '1.pdf'
    //     try {
    //         res.contentType("application/pdf");
    //         fs.createReadStream(path).pipe(res)
    //     } catch (error) {
    //         res.status(500)
    //         console.log('File not found')
    //         res.send('File not found')
    //     }
    // }
    readPdf(req, res) {
        const pathfile = "1.pdf"
        const dirPath = path.join(__dirname, "..","..","public/");
        console.log(dirPath + pathfile);
        fs.readFile(dirPath+pathfile , function (err,data){
            res.contentType("application/pdf");
            res.send(data);
        });
    }
    

}

module.exports = new mainController