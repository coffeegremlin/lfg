import { Router } from "express"
import * as apiCtrl from "../controllers/api.js"
import { decodeUserFromToken } from "../middleware/auth/js"

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:query',  apiCtrl.search )

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }