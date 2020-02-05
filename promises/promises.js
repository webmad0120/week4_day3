const mongoose = require('mongoose')
const Cat = require('./models/Dog-model')


mongoose
    .connect('mongodb://localhost/dogs0120', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))


/*
Cat.collection.drop()       // Vacía la colección
Cat.create({ name: 'Michifú' })
    .then(theCat => {
        console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name)
        Cat.find({})
            .then(allTheCats => {
                console.log("El método .find() retorna un Array", allTheCats)
                allTheCats.forEach(cat => console.log("Hay un gato llamaod", cat.name))
                Cat.insertMany([{ name: 'Belcebú' }, { name: 'Garfield' }])
                    .then(allNewCats => {
                        console.log("Los gatos nuevos son:", allNewCats)
                    })
                    .catch(err => console.log("Hubo un error!", err))
            })
            .catch(err => console.log("Hubo un error!", err))
    })
    .catch(err => console.log("Hubo un error!", err))
*/












Cat.collection.drop()
Cat.create({ name: 'Michifú' })
    .then(theCat => console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name))
    .then(x => Cat.find({}))
    .then(allTheCats => console.log("El método .find() retorna un Array", allTheCats))
    .then(x => Cat.insertMany([{ name: 'Belcebú' }, { name: 'Garfield' }]))
    .then(allNewCats => console.log("Los gatos nuevos son:", allNewCats))
    .catch(err => console.log("Hubo un error!", err))














/*
Cat.collection.drop()
Cat.create({ name: 'Michifú' })
    .then(theCat => {
        console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name)
        return Cat.find({})
    })
    .then(allTheCats => {
        console.log("El método .find() retorna un Array", allTheCats)
        allTheCats.forEach(cat => console.log("Hay un gato llamado", cat.name))
        return Cat.insertMany([{ name: 'Belcebú' }, { name: 'Garfield' }])
    })
    .then(allNewCats => console.log("Los gatos nuevos son:", allNewCats))
    .catch(err => console.log("Hubo un error!", err))
*/



