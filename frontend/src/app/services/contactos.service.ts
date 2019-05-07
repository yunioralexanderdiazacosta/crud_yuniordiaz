import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  
  API_URI = 'http://localhost:4000/api';


  constructor(private http: HttpClient) { }

  getContactos()
  {
  	 return this.http.get(`${this.API_URI}/contactos`);
  }

  getContacto(id: number)
  {
  	return this.http.get(`${this.API_URI}/contactos/${id}`);
  }

  createContacto(contacto: Contacto)
  {
  	return this.http.post(`${this.API_URI}/contactos`, contacto);
  }

  updateContacto(id: number, contacto: Contacto)
  {
  	return this.http.put(`${this.API_URI}/contactos/${id}`, contacto);
  }

  deleteContacto(id: number)
  {
  	return this.http.delete(`${this.API_URI}/contactos/${id}`);	
  }
}
