import express, { Router } from 'express'
import { CreateUser, UserController } from '../controller/UserController.js'

const router = express.Router()

router.get('/getAllUser', UserController)
router.post('/create-user', CreateUser)

export default router