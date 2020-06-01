import MongoClient from 'mongodb'


export const connect = async ()=>{
   try{
        const client =  await MongoClient.connect(process.env.DB,{
            useUnifiedTopology: true
        })
        const db =   client.db(process.env.NAME_BD);
        console.log('DB Connected')
        return db
   }catch{
       console.log('Eror no se pudo conectar a la bd')
   }
}

