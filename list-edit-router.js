const {Router} = require("express")
const router = Router();

const cuerpoVacio = (req, res, next) => {

  if (req.method === 'POST') {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Solicitudes POST con el cuerpo vacio.' });
    }
  }else if (req.method === 'PUT') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Cuerpo de la solicitud PUT vacío' });
    }
  } 
  next();
};

const solicitudNoValida = (req, res, next) => {

  if (req.method === 'POST') {
    const { id, isCompleted, description } = req.body;
    if (!id || !isCompleted || !description) {
      return res.status(400).json({ error: 'Información no valida o Faltan atributos obligatorios en la solicitud de la tarea.' });
    } else if (req.method === 'PUT') {
      const { id, isCompleted, description } = req.body;
      if (!id || !isCompleted || !description) {
        return res.status(400).json({ error: 'Información no valida o Faltan atributos obligatorios en la solicitud de la tarea.' });
      }
    next();
  } else {

    next();
  }
}};

Router.use(express.json()); 
Router.use(cuerpoVacio);
Router.use(solicitudNoValida);


Router.post('', (req, res) => {
  res.json({ mensaje: 'Solicitudes POST con el cuerpo vacio.' });
});

router.post('/crear-tarea', (req, res) => {
    res.send("Tarea añadida")
})

router.put('/crear-tarea', (req, res) => {
  res.send("Tarea añadida")
})

router.delete('/eliminar-tarea/:idTarea', (req, res) => {
    const id = req.params.idTarea
    res.send("La tarea eliminada es : " + Id)
})

router.put('/actualizar-tarea/:idTarea', (req, res) => {
    const id = req.params.idTarea
    res.send("Tarea actualizada")
})

module.exports = router;