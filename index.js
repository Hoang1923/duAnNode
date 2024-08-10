const  express  = require('express')
const path = require('path')
const app = express()

const publicDirectory = path.join(__dirname, 'public');
app.use(express.static(publicDirectory));


function trangChu(request, response){

}

app.get('/thoiTiet', (request, response) =>{


    response.sendFile(path.join(publicDirectory, 'thoiTiet/index.html') )
})

app.get('/shoope', (request, response) =>{


    response.sendFile(path.join(publicDirectory, 'clone_shoppe/login.html') )
})

app.listen(3000, () =>{
    console.log('hello')
})