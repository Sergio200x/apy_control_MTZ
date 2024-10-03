import express from "express";
import config from './config.js'
const app =express();
import cors from 'cors'
import Sync_routes from './routes/Sync_routes.js'
app.use(express.json())

//setings
app.set('port', config.port )

app.use(cors())

app.use(Sync_routes)




export default app;