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


// Dog.find()      // Sin argumento, .find() retorna todos los registros
//     .then(allTheDogsFound => {
//         console.log(`Se encontraron ${allTheDogsFound.length} perros:`)
//         allTheDogsFound.forEach(elm => console.log('-', elm.name))
//     })
//     .catch(err => console.log("Se produjo un error...." + err))



// Dog.find({ age: { $gte: 12 } })
//     .then(allTheDogsFound => {
//         console.log(`Se encontraron ${allTheDogsFound.length} perros:`)
//         allTheDogsFound.forEach(elm => console.log('-', elm.name, '-', elm.age, 'años'))
//     })
//     .catch(err => console.log("Se produjo un error...." + err))




// Dog.findById('5e3ab23dfc6e7f14d38cdb83')
//     .then(theDogFound => {
//         console.log(`El objeto de perro retornado se llama ${theDogFound.name}`)
//     })
//     .catch(err => console.log("Se produjo un error...." + err))