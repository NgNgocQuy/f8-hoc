const Product = require("../model/product")
const Project = require("../model/project")
class viewData{

    product(req, res){
        Product.find({},(err,productDocs)=>{
            // productDocs = productDocs.toString()
            // productDocs = productDocs.map(productDocs => productDocs.toObject())
            console.log(productDocs);
            // res.render("product/product", {productDocs} )
            res.json(productDocs)
        })
    }
    product1(req, res){
        Project.find({},(err,data)=>{
            res.json(data)
        })
            
        
    }

}

module.exports = new viewData