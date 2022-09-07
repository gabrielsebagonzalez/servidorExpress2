
const fs = require('fs');
const express = require('express');
const app = express();

const Port = 8080;

const server = app.listen(Port, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
})



class Contenedor {

    async getAll() {
        try {
            const contenido = await fs.promises.readFile('productos.txt', 'utf-8');
            console.log(contenido);
            return JSON.parse(contenido);
            
        } catch (error) {}
    }

    async getById(id) {
        const contenido = await this.getAll();
        const productoBuscado = contenido.filter((contenido) => contenido.id === id);
        console.log(productoBuscado);
        return productoBuscado;
    }
            
}

const contenedor = new Contenedor();

app.get('/', (req, res) => {
    res.send(`<h1>Página de Inicio</h1>`);
})

app.get('/productos', (req, res) => {
    contenedor.getAll().then((respuesta) => {res.send(respuesta)})

});

app.get('/productoRandom', async (req, res) => {
    const random =  await contenedor.getById();
    res.send(`${contenedor.getById(random)}`);
});
 







