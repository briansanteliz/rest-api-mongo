import {Router } from 'express'

const routes = Router()

routes.get('/', (req,res)=>{
    res.json('Bienvenido a mi API')
})

export default routes