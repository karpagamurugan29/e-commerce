import express, { Router } from 'express'
import { UserController } from '../controller/UserController.js'

const router = express.Router()

router.get('/getAllUser', UserController)

export default router