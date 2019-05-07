"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursantesController_1 = require("../controllers/cursantesController");
class CursantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cursantesController_1.cursantesController.index);
        this.router.get('/:id', cursantesController_1.cursantesController.show);
        this.router.post('/', cursantesController_1.cursantesController.create);
        this.router.put('/:id', cursantesController_1.cursantesController.update);
        this.router.delete('/:id', cursantesController_1.cursantesController.delete);
    }
}
const cursantesRoutes = new CursantesRoutes();
exports.default = cursantesRoutes.router;
