const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB)//Variable de entorno que permite cargar
.then((db)=>console.log('Bien, conectado a la base de datos'))
.catch((err)=>console.log('Mal, no se conectó a la base de datos'))