import { Router } from 'express'
import * as retailCtrl from "../controllers/retail.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Protected Routes ========= //
router.use(decodeUserFromToken)
router.get('/:query',  checkAuth, retailCtrl.search )

export {
  router
}