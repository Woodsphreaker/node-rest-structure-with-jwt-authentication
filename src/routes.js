import { Router } from 'express'
import auth from './app/middlewares/auth'

// Controllers
import sessionController from './app/controllers/sessionControler'
import fakeController from './app/controllers/fakeController'

const router = Router()

// Session Controller
router.post('/session', sessionController.store)

/*
  SECURED ROUTES
*/
router.use(auth)

// fake controller router
router.get('/fake', fakeController.index)
router.get('/fake/:id', fakeController.show)
router.post('/fake', fakeController.store)
router.put('/fake/:id', fakeController.update)
router.delete('/fake/:id', fakeController.destroy)

export default router
