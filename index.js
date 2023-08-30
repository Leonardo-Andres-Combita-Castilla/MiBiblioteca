const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require ('./server/routes/router');

const port = 3000;

app.use(express.json());

app.use('/api',routes);

app.listen(port, () => {
    console.log(`Servidor esta en ejecucion en el puerto ${port}`)
})

// coneccion a mongodb

const mongoConect = async () => {
    try{
        await mongoose.connect (
            'mongodb+srv://leonardoandres89:leonardoDEVF@devf-backend.dec94mt.mongodb.net/?retryWrites=true&w=majority'
            ) 
            console.log ('conectado correctamente con mongo')
    }
    catch (err) {
        console.log (err)
    }
}

mongoConect()

