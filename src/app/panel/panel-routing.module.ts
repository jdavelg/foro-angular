import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';




const panelRoutes: Routes=[

    {
        path:'panel',
        component:MainComponent,
        
        children:[
         { path: '', component: ListComponent },
         { path: 'crear', component: AddComponent },
         { path: 'listado', component: ListComponent },
         { path: 'editar/:id', component: EditComponent },
        ]
    }
];

@NgModule({

    imports:[
        RouterModule.forChild(panelRoutes),
        FormsModule
    ],
    exports:[
        RouterModule
    ]

})
export class PanelRoutingModule { }