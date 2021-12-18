import { Router } from 'express'
import * as eventCtrl from "../controllers/events.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/', eventCtrl.index)
router.get('/:id', eventCtrl.show)



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, eventCtrl.create)
router.put('/:id', checkAuth, eventCtrl.update)
router.delete('/:id', checkAuth, eventCtrl.delete)




export {
  router
}