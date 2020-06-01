import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/index'
import routesTask from './routes/task'

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use(routes)
app.use('/tareas',routesTask )

module.exports = app