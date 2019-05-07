"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const especialidadesController_1 = require("../controllers/especialidadesController");
class EspecialidadesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', especialidadesController_1.especialidadesController.index);
        this.router.get('/:id', especialidadesController_1.especialidadesController.show);
        this.router.post('/', especialidadesController_1.especialidadesController.create);
        this.router.put('/:id', especialidadesController_1.especialidadesController.update);
        this.router.delete('/:id', especialidadesController_1.especialidadesController.delete);
    }
}
const especialidadesRouter = new EspecialidadesRouter();
exports.default = especialidadesRouter.router;
