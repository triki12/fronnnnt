import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { ChauffListComponent } from './chauff-list/chauff-list.component';
import { DetailChauffComponent } from './detail-chauff/detail-chauff.component';
import { ModifierChauffComponent } from './modifier-chauff/modifier-chauff.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'addChauf',
        component: ChauffeurComponent,
        data: {
          title: 'addChauf'
        }
      },

      {
        path: 'chauffeurs',
        component:ChauffListComponent ,
        data: {
          title: 'Chauffeurs'
        }
      },
      {
        path: 'detailCauff/:id',
        component:DetailChauffComponent ,
        data: {
          title: 'DetailCauff'
        }
      },
      {
        path: 'updateCauff/:id',
        component:ModifierChauffComponent ,
        data: {
          title: 'UpdateCauffeur'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
