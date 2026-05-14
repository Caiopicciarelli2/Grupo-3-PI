var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/ultimas/grafico-linha", function (req, res) {
    dashController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/grafico-linha", function (req, res) {
    dashController.buscarMedidasEmTempoReal(req, res);
})



router.get("/ultimas/grafico-calor", function (req, res) {
    dashController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/grafico-calor", function (req, res) {
    dashController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;