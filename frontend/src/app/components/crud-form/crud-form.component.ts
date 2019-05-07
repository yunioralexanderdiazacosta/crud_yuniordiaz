import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  contacto: any = {
  	id: 0,
  	razon_social: '',
  	rif: '',
  	contacto: '',
  	ubicacion: '',
  	tlf_1: '',
  	tlf_2: ''
  }

  edit: boolean = false;

  constructor(private contactosService: ContactosService,
  	private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	const params = this.activatedRoute.snapshot.params;
	  	if(params.id)
	  	{
	  		this.contactosService.getContacto(params.id).subscribe(
	  			res => {
	  				this.edit = true;
	  				this.contacto = res;
	  			},
	  			err => {
	  				console.error(err);
	  			}
	  		);
	  	}
  }


  guardarContacto()
  {
  	 this.contactosService.createContacto(this.contacto).subscribe(
  	 	res => {
  	 		this.router.navigate(['/contactos']);
  	 	},
  	 	err => {
  	 		console.error(err);
  	 	}
  	 )
  }

  actualizarContacto()
  {

     this.contactosService.updateContacto(this.contacto.id, this.contacto).subscribe(
       res => {
         this.router.navigate(['/contactos']);
       },
       err => {
         console.error(err);
       }
     )
  }

}
