const mongoose = require('mongoose');
const Dog = require('./models/Dog-model')

mongoose
    .connect('mongodb://localhost/dogs0120', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))


const dog1 = { name: 'Cartucho', age: 8, color: 'Dirty white' }
const dog2 = { name: 'Margarita', age: 5, color: 'Dirty brown' }
const dog3 = { name: 'Pelayo', age: 11, color: 'Brown clean' }
const dog4 = { name: 'Cholín', age: 1, color: 'Black' }

Dog.create(dog1)
    .then(theNewDog => console.log(`El nuero perro ${theNewDog.name} ha sido creado:`, theNewDog))
    .catch(error => console.log(`Se produjo un error: ${error}`))

Dog.insertMany([dog2, dog3, dog4])
    .then(theNewDogs => {
        theNewDogs.forEach(elm => console.log(`${elm.name} ya ha entrado en la Base de datos (¡${elm.age} añazos!)`))
    })
    .catch(error => console.log(`Se produjo un error: ${error}`))