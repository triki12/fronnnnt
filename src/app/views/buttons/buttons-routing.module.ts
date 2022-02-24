import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';
import { AddvehiculeComponent } from './addvehicule/addvehicule.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vehicules'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'addvehicule',
        component: AddvehiculeComponent,
        data: {
          title: 'AddVehicule'
        }
      },
     
      {
        path: 'vehicules',
        component: VehiculesComponent,
        data: {
          title: 'Vehicules'
        }
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
