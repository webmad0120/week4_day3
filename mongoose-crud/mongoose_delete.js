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


// Dog.deleteMany({ age: 6 })
//     .then(deleteInfo => console.log(deleteInfo))
//     .catch(error => console.log(`Se produjo un error: ${error}`))



// Dog.deleteOne({ age: 6 })
//     .then(deleteInfo => console.log(deleteInfo))
//     .catch(error => console.log(`Se produjo un error: ${error}`))


// Dog.findByIdAndDelete('string_con_el_id')
//     .then(deleteInfo => console.log(deleteInfo))
//     .catch(error => console.log(`Se produjo un error: ${error}`))