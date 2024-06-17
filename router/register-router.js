import express from "express"
import register from "../controller/auth-controller.js"
import {login,contact,userdata,services,mernuser,merncontact,servicespost,servicespostdelet} from "../controller/auth-controller.js"
import userdataMiddleware from "../middleware/userdata-middleware.js"
import mernmidleware from "../middleware/mern-middleware.js"
let router=express.Router()
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/contact').post(contact)
router.route('/userdata').get(userdataMiddleware,userdata)
router.route('/services').get(services)
router.route('/services').post(servicespost)
router.route('/services/:id').delete(servicespostdelet)
router.route('/mernuser').get(mernuser)
router.route('/merncontact').get(merncontact)



    export default router