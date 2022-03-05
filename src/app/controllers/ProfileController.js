const res = require("express/lib/response")

class mainController{

    home(req, res){
        res.render("home")
    }

    myCv(req,res){
        res.render("cv/mycv")
    }

}

module.exports = new mainController