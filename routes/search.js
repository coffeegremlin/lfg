import { Router } from "express"
import * as apiCtrl from "../controllers/api.js"

const router = Router()

/*---------- Public Routes ----------*/
router.get('/',  apiCtrl.search )

/*---------- Protected Routes ----------*/


export { router }