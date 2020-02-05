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


// //Dog.updateMany({ name: 'Pistacho' }, { name: 'Pistachete' })
// Dog.updateMany({ name: 'Uller' }, { age: 7 })
//     .then(updateInfo => console.log(updateInfo))
//     .catch(error => console.log(`Se produjo un error: ${error}`))




// Dog.updateOne({ name: 'Uller' }, { age: 99 })
//     .then(updateInfo => console.log(updateInfo))
//     .catch(error => console.log(`Se produjo un error: ${error}`))




// Pasándole {new: true} retorna el elemento ACTUALIZADO, no el antiguo
Dog.findByIdAndUpdate('5e3ab23dfc6e7f14d38cdb82', { color: 'Clean brown' }, { new: true })
    .then(theUpdatedDog => console.log(theUpdatedDog))
    .catch(error => console.log(`Se produjo un error: ${error}`))
