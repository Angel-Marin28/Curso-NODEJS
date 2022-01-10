const {Router} = require("express");

const router = Router();

//Para consultar estas rutas se accede en localhost:301/Usuarios/
router.get("/", function(req, res) {
    res.json ({ msg: "Hola a todos soy Angel Garcia Marin saludos desde GET"});
});
router.post("/", function(req, res) {
    res.status(201).json ({ msg: "Hola a todos soy Angel Garcia Marin saludos desde POST"});
});

router.put("/", function(req, res) {
     res.status(400).json ({msg: "Hola a todos soy Angel Garcia Marin saludos desde PUT"});
});

router.delete("/", function(req, res) {
     res.status(500).json ({ msg: "Hola a todos soy Angel Garcia Marin saludos desde DELETE"});
});

module.exports = router;
