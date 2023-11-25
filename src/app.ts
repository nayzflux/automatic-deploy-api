import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World! ✨',
    });
});

app.listen(3000, () => console.log(`Server listening on :${PORT}`));