import {Request, Response } from 'express';
import pool from '../database';

class ContactosController {
	public async index (req: Request, res: Response){
	  	const cursantes = await pool.query("SELECT * FROM datos");
		res.json(cursantes);
	}

	public async show (req: Request, res: Response){
		const { id } = req.params;
		const cursante = await pool.query("SELECT * FROM datos WHERE id = ?", [id]);
		if(cursante.length > 0)
		{
			return res.json(cursante[0]);
		}
		else
		{
			res.status(404).json({ message: 'El contacto no existe'});
		}
	}

	public async create (req: Request, res: Response): Promise<void> {
		await pool.query("INSERT INTO datos SET ?", [req.body]);
		res.json({message: 'Contacto almacenado con exito'});
	}

	public async update (req: Request, res: Response): Promise<void> { 
		const { id } = req.params;
		await pool.query("UPDATE datos SET ? WHERE id = ?", [req.body, id]);
		res.json({message: 'Contacto actualizado con exito'});
	}

	public async delete (req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		await pool.query("DELETE FROM datos WHERE id = ?", [id]);
		res.json({message: 'Contacto eliminado con exito'});
	}
}
export const contactosController = new ContactosController();