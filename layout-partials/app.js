const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')


app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))                         // Views directory setup
app.set('view engine', 'hbs')                                           // View engine setup

hbs.registerPartials(path.join(__dirname, 'views', 'partials'))         // Partials setup

// app.get('/', (req, res) => {                                         // Omitir el layout
//     let data = { layout: false }
//     res.render('index', data)
// })

app.get('/', (req, res) => res.render('index'))
app.get('/players', (req, res) => {

    const data = [
        {
            'name': 'Rusell',
            'lastName': 'Westbrook',
            'team': 'OKC',
            'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
        },
        {
            'name': 'Kevin',
            'lastName': 'Durant',
            'team': 'GSW',
            'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
        },
        {
            'name': 'Lebron',
            'lastName': 'James',
            'team': 'CLE',
            'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
        },
        {
            'name': 'Emanuel',
            'lastName': 'Ginóbilli',
            'team': 'SAS',
            'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
        },
        {
            'name': 'Kyrie',
            'lastName': 'Irving',
            'team': 'BOS',
            'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf'
        }
    ]

    res.render('players', { players: data })     // El segundo argumento DEBE SER UN OBJETO
})
app.get('/teams', (req, res) => res.render('teams'))

app.listen(3000, () => console.log("Server listening on port 3000"))