const express = require('express');
const app = express();
app.use(express.json());


const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 }
  ];

const clientes = [
    { id: 1, nombre: 'Juan Rojas', contacto: 'juan.rojas@gmail.com' },
    { id: 2, nombre: 'Pedro Mamani', contacto: 'pedro.mamani@gmail.com' },
    { id: 3, nombre: 'Mario Muñoz', contacto: 'mario.munoz@gmail.com' }
];  

app.get('/', (req, res) => res.send('Lab04 Soluciones en la nube'));
app.get('/clientes', (req, res) => res.json(clientes));
app.get('/clientes', (req, res) => res.json(clientes));

app.post('/clientes', (req, res) => {
    const nuevoCliente = req.body;
    nuevoCliente.id = clientes.length + 1;
    clientes.push(nuevoCliente);
    res.status(201).send(nuevoCliente);
});

app.put('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = clientes.findIndex(c => c.id === id);
    if (indice !== -1) {
        clientes[indice] = {...clientes[indice], ...req.body};
        res.send(clientes[indice]);
    } else {
        res.status(404).send('Cliente inexistente');
    }
});

app.delete('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = clientes.findIndex(c => c.id === id);
    if (indice !== -1) {
        clientes.splice(indice, 1);
        res.status(200).send(`Cliente con id ${id} eliminado`);
    } else {
        res.status(404).send('Cliente inexistente');
    }
});
app.get('/productos', (req, res) => {
res.json(productos);
});

app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = productos.length + 1;
  productos.push(nuevoProducto);
  res.status(201).send(nuevoProducto);
});

app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = productos.findIndex(p => p.id === id);
  if (indice !== -1) {
      productos[indice] = {...productos[indice], ...req.body};
      res.send(productos[indice]);
  } else {
      res.status(404).send('Producto inexistente');
  }
});

app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = productos.findIndex(p => p.id === id);
  if (indice !== -1) {
      productos.splice(indice, 1);
      res.status(200).send(`Producto con id ${id} eliminado`);
  } else {
      res.status(404).send('Producto inexistente');
  }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});
