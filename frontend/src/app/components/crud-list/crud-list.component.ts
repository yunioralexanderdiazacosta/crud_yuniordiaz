import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
	contactos: any = [];

  constructor(private contactosService: ContactosService) { }

  ngOnInit() {
  	this.listarContactos();
  }

  listarContactos()
  {
  	 this.contactosService.getContactos().subscribe(
  	 	res => {
  	 		this.contactos = res;
  	 	},
  	 	err => {
  	 		console.error(err);
  	 	}
  	 )
  }

  eliminarContacto(id: number)
  {
  	this.contactosService.deleteContacto(id).subscribe(
  	 	res => {
  	 		this.listarContactos();
  	 	},
  	 	err => {
  	 		console.error(err);
  	 	}
  	 )		
  }

}
