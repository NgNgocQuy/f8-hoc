const express = require("express")
const router = express.Router()

const viewData = require("../app/controllers/viewData.js")

router.get("/product", viewData.product)
router.get("/product1", viewData.product1)

module.exports = router