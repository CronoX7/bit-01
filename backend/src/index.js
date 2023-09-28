//Entry point, punto de entrada de mi app
require('dotenv').config();//Env permite ocultar información sensible para que no se publique en GIT
require('./database')
const server =require('./server');

const port=server.get("port");

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)

});
