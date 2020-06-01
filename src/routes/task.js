import {Router } from 'express'
import {get,post,getOne, put, dele } from '../controllers/task'

const router = Router()

router.get('/', get)
router.post('/', post)
router.get('/:nombre', getOne)
router.put('/:nombre', put)
router.delete('/:nombre', dele)
export default router
