const express = require('express');
const fs = require('fs');
const cors = require('cors'); 

const app = express();

app.use(express.json());

// Configura CORS
app.use(cors());

// Middleware para manejar solicitudes OPTIONS preflight
app.options('*', cors()); // Habilitar CORS para todas las rutas OPTIONS

// Agregar un middleware para manejar solicitudes OPTIONS preflight
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Lee el contenido del archivo db.json y lo asigna a la variable coffeeDrinks
let coffeeDrinks = readData();

app.get('/', (req, res) => {
    res.send('API de Café');
});

app.get('/api/coffeedrinks', (req, res) => {
    const { id, name } = req.query;

    // Si se proporciona un ID o un nombre, buscar por ID o por nombre
    if (id || name) {
        let foundDrinks = [];

        // Buscar por ID si se proporciona
        if (id) {
            const drinkById = coffeeDrinks.find(drink => drink.id === parseInt(id));
            if (drinkById) {
                foundDrinks.push(drinkById);
            }
        }

        // Buscar por nombre si se proporciona
        if (name) {
            const drinkByName = coffeeDrinks.filter(drink => drink.name.toLowerCase().includes(name.toLowerCase()));
            foundDrinks = foundDrinks.concat(drinkByName);
        }

        // Verificar si se encontraron bebidas
        if (foundDrinks.length === 0) {
            return res.status(404).send('No se encontraron bebidas con ese ID o nombre.');
        }

        return res.send(foundDrinks);
    }

    // Si no se proporciona ni nombre ni ID, devolver todas las bebidas
    res.send(coffeeDrinks);
});

// Agregar una nueva bebida
app.post('/api/coffeedrinks', (req, res) => {
    const newDrink = req.body;
    newDrink.id = coffeeDrinks.length + 1;
    coffeeDrinks.push(newDrink);
    writeData(coffeeDrinks); // Guardar los datos actualizados en el archivo db.json
    res.send(newDrink);
});

// Editar una bebida existente (excepto el ID)
app.put('/api/coffeedrinks/:id', (req, res) => {
    const { id } = req.params;
    const updatedDrink = req.body;
    const index = coffeeDrinks.findIndex(drink => drink.id === parseInt(id));
    if (index === -1) return res.status(404).send('Bebida no encontrada');
    coffeeDrinks[index] = { ...coffeeDrinks[index], ...updatedDrink };
    writeData(coffeeDrinks); // Guardar los datos actualizados en el archivo db.json
    res.send(coffeeDrinks[index]);
});

// Borrar una bebida por ID
app.delete('/api/coffeedrinks/:id', (req, res) => {
    const { id } = req.params;
    coffeeDrinks = coffeeDrinks.filter(drink => drink.id !== parseInt(id));
    writeData(coffeeDrinks); // Guardar los datos actualizados en el archivo db.json
    res.send(coffeeDrinks);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));

// Función para leer el contenido del archivo db.json
function readData() {
    try {
        const data = fs.readFileSync("./db.json");
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData.coffeeDrinks)) {
            return parsedData.coffeeDrinks;
        } else {
            throw new Error("Los datos en db.json no son válidos o no hay bebidas disponibles.");
        }
    } catch (error) {
        console.log("Error al leer db.json:", error);
        return [];
    }
}


// Función para escribir datos en el archivo db.json
function writeData(data) {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
    } catch (error) {
        console.log("Error al escribir en db.json:", error);
    }
}
