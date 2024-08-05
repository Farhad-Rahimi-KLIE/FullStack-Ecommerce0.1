const express = require("express");
const router = express.Router();
const upload = require("../Utils/Image")
const Register = require('../Controller/Register-Controller.js')
const LoginKaro = require('../Controller/Login-Controller.js');
const AddProduct = require("../Controller/Add-Product-Controller.js");
const getThree = require("../Controller/getThree-Controller.js");
const getAll = require("../Controller/getAll-Controller.js");
const SearchApi = require("../Controller/search-Controller.js");
const getupDate = require("../Controller/getupDate-Controller.js");
const SingleData = require("../Controller/SingleData-Controller.js");

router.post('/register', Register)
router.post('/login', LoginKaro)
router.post('/add',upload.single('image'), AddProduct)
router.get('/getThree', getThree)
router.get('/getAll', getAll)
router.get('/search/:key', SearchApi)
router.get('/getupdatedata/:id', getupDate)

module.exports = router;