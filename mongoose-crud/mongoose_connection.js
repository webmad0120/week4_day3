const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/dogs0120', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))



// Aquí van las operaciones con DB


mongoose.connection.on('connected', () => console.log("Conexión establecida"))
mongoose.connection.on('error', () => console.log("Error en conexión"))
mongoose.connection.on('disconnected', () => console.log("Conexión discontinuada"))