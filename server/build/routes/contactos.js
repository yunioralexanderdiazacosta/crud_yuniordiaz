"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactosController_1 = require("../controllers/contactosController");
class ContactosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contactosController_1.contactosController.index);
        this.router.get('/:id', contactosController_1.contactosController.show);
        this.router.post('/', contactosController_1.contactosController.create);
        this.router.put('/:id', contactosController_1.contactosController.update);
        this.router.delete('/:id', contactosController_1.contactosController.delete);
    }
}
const contactosRoutes = new ContactosRoutes();
exports.default = contactosRoutes.router;
