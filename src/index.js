import app from './app.js'

app.listen(app.get('port'))

console.log("Ejecutando Api en el puerto"+" "+ process.env.PORTS)

