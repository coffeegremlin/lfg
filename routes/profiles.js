import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Protected Routes ========= //
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/currentuser', checkAuth, profilesCtrl.showLoggedInUserProfile)

export { router }
