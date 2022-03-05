const express = require("express")
const router = express.Router()

const mainController = require("../../app/controllers/MainControllers")

router.post("/editCv", (req,res,next)=>{console.log("/editCv"), next();} , mainController.editCv )
router.post("/updateCvProject", (req,res,next)=>{console.log("/updateCvProject"), next();} , mainController.updateCvProject )
router.post("/addPersional", (req,res,next)=>{console.log("/addPersional"), next();} , mainController.addPersional)
router.get("/readPdf", (req,res,next)=>{console.log("/readPdf"), next();} , mainController.readPdf )
router.get("/", mainController.myCv)

module.exports = router