import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crud-view',
  templateUrl: './crud-view.component.html',
  styleUrls: ['./crud-view.component.css']
})
export class CrudViewComponent implements OnInit {
   contacto: any = {
  	id: 0,
  	razon_social: '',
  	rif: '',
  	contacto: '',
  	ubicacion: '',
  	tlf_1: '',
  	tlf_2: ''
  }

  constructor(private contactosService: ContactosService,
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  		const params = this.activatedRoute.snapshot.params;
	  	if(params.id)
	  	{
	  		this.contactosService.getContacto(params.id).subscribe(
	  			res => {
	  				this.contacto = res;
	  			},
	  			err => {
	  				console.error(err);
	  			}
	  		);
	  	}
  }

}
