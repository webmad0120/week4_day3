const mongoose = require('mongoose')
const Dog = require('./models/Dog-model')


mongoose
    .connect('mongodb://localhost/dogs0120', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))



Dog.countDocuments({ name: 'Uller' })
    .then(counter => console.log(`Hay un total de ${counter} perros`))
    .catch(error => console.log(`Se produjo un error: ${error}`))
