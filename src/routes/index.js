const myCv = require("./myCv/myCv")
const viewData = require("./viewData")
const mainController = require("../app/controllers/MainControllers")
function route(app){
    app.use("/data",viewData)
    app.use("/myCv", myCv )
    app.get("/", mainController.home)
}

module.exports = route