import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { AddvehiculeComponent } from './addvehicule/addvehicule.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    AddvehiculeComponent,
    VehiculesComponent
  ]
})
export class ButtonsModule { }
