const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const personRoute = "/api/persons";

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get(personRoute, (request, response) => {
  response.json(persons);
});
app.get(`${personRoute}/:id`, (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  }
  response.status(404).end();
});

app.delete(`${personRoute}/:id`, (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post(personRoute, (request, response) => {
  const { name, number } = request.body;
  console.log(name);
  const doesItExist = persons.some((person) => person.name === name);
  if (name && number && !doesItExist) {
    const person = {
      id: Math.random() * 1000000,
      name,
      number,
    };
    persons = persons.concat(person);
    response.json(person);
  }
  if (doesItExist) {
    response.status(409).json({
      error: "Name already exists",
    });
  }
  response.status(400).json({
    error: "content missing",
  });
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(
    `Phonebook has info for ${persons.length} persons <br/> ${date}`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at Port: ${PORT}`);
});
