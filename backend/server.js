import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dataFile = path.join(process.cwd(), "server", "characters.json");

// Helper function to read file
function readCharacters() {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data).characters;
}

// Helper function to write file
function writeCharacters(characters) {
    fs.writeFileSync(dataFile, JSON.stringify({ characters }, null, 2));
}

// GET all characters
app.get("/characters", (req, res) => {
    res.json(readCharacters());
});

// GET character by ID
app.get("/characters/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const characters = readCharacters();
    const character = characters.find(c => c.id === id);
    character ? res.json(character) : res.status(404).send("Character not found");
});

// POST create new character
app.post("/characters", (req, res) => {
    const characters = readCharacters();
    const newCharacter = { id: Date.now(), ...req.body };
    characters.push(newCharacter);
    writeCharacters(characters);
    res.status(201).json(newCharacter);
});

// PUT update character
app.put("/characters/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let characters = readCharacters();
    const index = characters.findIndex(c => c.id === id);
    if (index === -1) return res.status(404).send("Character not found");

    characters[index] = { ...characters[index], ...req.body };
    writeCharacters(characters);
    res.json(characters[index]);
});

// DELETE character
app.delete("/characters/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let characters = readCharacters();
    characters = characters.filter(c => c.id !== id);
    writeCharacters(characters);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
