const {Router} = require("express");

const{
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosignin,
} = require("../controllers/usuarios");

const router = Router();

//localhost:3001/usuarios/n
router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/", usuariosPut);
router.delete("/", usuariosDelete);
router.post("/signin/", usuariosignin);

module.exports = router;
