import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

interface Database {
    animals: Animal[]
}

interface Animal {
    id: number;
    name: string;
}

const db: Database = {
    animals: [
        {
            id: 1,
            name: 'Lion 🦁'
        },
        {
            id: 2,
            name: 'Lézard 🦎'
        },
        {
            id: 3,
            name: 'Tortue 🐢'
        },
        {
            id: 4,
            name: 'Chien 🐕'
        },
        {
            id: 5,
            name: 'Poule 🐔'
        },
    ]
}

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World! ✨',
        version: 2.1
    });
});

app.get('/animals', async (req, res) => {
    const animals = db.animals;

    res.status(200).json({
        animals
    });
});

app.listen(3000, () => console.log(`Server listening on :${PORT}`));
