"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CursantesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursantes = yield database_1.default.query("SELECT * FROM cursantes");
            res.json(cursantes);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cursante = yield database_1.default.query("SELECT * FROM cursantes WHERE id = ?", [id]);
            if (cursante.length > 0) {
                return res.json(cursante[0]);
            }
            else {
                res.status(404).json({ message: 'El cursante no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO cursantes SET ?", [req.body]);
            res.json({ message: 'Cursante almacenado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE cursantes SET ? WHERE id = ?", [req.body, id]);
            res.json({ message: 'Cursante actualizado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM cursantes WHERE id = ?", [id]);
            res.json({ message: 'Cursante eliminado con exito' });
        });
    }
}
exports.cursantesController = new CursantesController();
