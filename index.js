const express = require('express');
const app = express();
const port = 3000;
const editRouter = require('./list-edit-router')
const viewRouter = require('./list-view-router')

const tasks = [
  {
    id: '123456',
    isCompleted: true,
    description: 'Despertar',
  },
  {
    id: '1234567',
    isCompleted: true,
    description: 'Tender la cama',
  },
  {
    id: '12345678',
    isCompleted: false,
    description: 'Desayunar',
  },

];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.use('/editar', editRouter, () =>{
    console.log("estan editando la lista de tareas")
});

app.use('/ver', viewRouter, () => {
    console.log("estan viendo la lista de tareas")
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
