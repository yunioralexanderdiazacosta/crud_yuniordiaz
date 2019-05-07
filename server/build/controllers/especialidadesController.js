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
class EspecialidadesController {
    //index
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const especialidades = yield database_1.default.query("SELECT * FROM especialidades");
            res.json(especialidades);
        });
    }
    //show
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const especialidad = yield database_1.default.query("SELECT * FROM especialidades WHERE id = ?", [id]);
            if (especialidad.length > 0) {
                return res.json(especialidad[0]);
            }
            else {
                res.status(404).json({ message: 'No se encontro la especialidad' });
            }
        });
    }
    //create
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO especialidades SET ?", [req.body]);
            res.json({ message: 'Especialidad almacenada con exito' });
        });
    }
    //update
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE especialidades SET ? WHERE id = ?", [req.body, id]);
            res.json({ message: 'Especialidad actualizada con exito' });
        });
    }
    //delete
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM especialidades WHERE id = ?", [id]);
            res.json({ message: 'Especialidad eliminada con exito' });
        });
    }
}
exports.especialidadesController = new EspecialidadesController();
