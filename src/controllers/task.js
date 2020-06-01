import {connect} from '../database.js'


const get = async (req, res)=>{
    const db = await connect();
    const query = await db.collection('tareas').find({}).toArray();
    res.json(query)
}
const getOne = async (req, res)=>{
    const {nombre } = req.params
    const db = await connect();
     const query = await db.collection('tareas').findOne({ nombre : nombre})
     res.json(query)
}
const post = async (req, res)=>{
    const db = await connect();
    const { nombre, descripcion} = req.body
    const tarea = {
        nombre,
        descripcion
    } 
   const resultado =  await db.collection('tareas').insert(tarea)
    const { result, ops} = resultado
    res.json({datos:ops[0], estado:result.ok})
    
}
const put = async (req, res)=>{
    const {nombre } = req.params
    const taskUpdate = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    }
    const db = await connect();
     const query = await db.collection('tareas').findOneAndUpdate({ nombre : nombre}, {$set: taskUpdate})
     const {lastErrorObject} = query
     res.status(200).json({
        mensaje:`El dato con el nombre  '${nombre}. Ha sido Actualizado correctamente`,
        estado:lastErrorObject.updatedExisting
     })
}
const dele = async (req, res)=>{
    const {nombre } = req.params
    const db = await connect();
     const query = await db.collection('tareas').deleteOne({ nombre : nombre})
     const { result} = query
    res.status(200).json({mensaje:`El dato con el nombre  '${nombre}. Ha sido eliminado correctamente`, estado:result.ok})
     
}

module.exports = {
    get,
    post,
    getOne,
    put,
    dele
}