const Product = require("../model/product")

class viewData{

    product(req, res){
        Product.find({},(err,productDocs)=>{
            // productDocs = productDocs.toString()
            productDocs = productDocs.map(productDocs => productDocs.toObject())
            console.log(productDocs);
            res.render("product/product", {productDocs} )
        })
    }
    product1(req, res){
        
            res.render("cv/myCv" )
        
    }

}

module.exports = new viewData