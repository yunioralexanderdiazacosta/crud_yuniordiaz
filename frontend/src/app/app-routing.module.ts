import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudListComponent }  from './components/crud-list/crud-list.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudViewComponent } from './components/crud-view/crud-view.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/contactos',
		pathMatch: 'full'
	},

	{
		path: 'contactos',
		component: CrudListComponent
	},

	{
		path: 'contactos/create',
		component: CrudFormComponent
	},

	{
		path: 'contactos/edit/:id',
		component: CrudFormComponent
	},

	{
		path: 'contactos/view/:id',
		component: CrudViewComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
