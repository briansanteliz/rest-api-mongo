import '@babel/polyfill'
import app from './server'



//iniciando el server
const index = async ()=>{
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`)

}

index()