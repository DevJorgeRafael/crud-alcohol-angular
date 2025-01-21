import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { ConsultaComponent } from './components/empleados/consulta/consulta.component'; 
import { CreacionComponent } from './components/empleados/creacion/creacion.component'; 
import { EdicionComponent } from './components/empleados/edicion/edicion.component'; 
import { AlcoholesComponent } from './components/alcoholes/alcoholes-list/alcoholes.component';
import { CreacionAlcoholComponent } from './components/alcoholes/creacion/creacion.component';
import { EdicionAlcoholComponent } from './components/alcoholes/edicion/edicion.component';

export const routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },{
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'empleados',
        component: ConsultaComponent,
    },{
        path: 'empleados/creacion',
        component: CreacionComponent
    },{
        path: 'empleados/edicion/:id',
        component: EdicionComponent
    },

    {
        path: 'alcoholes',
        component: AlcoholesComponent,
    },{
        path: 'alcoholes/creacion',
        component: CreacionAlcoholComponent
    },{
        path: 'alcoholes/edicion/:id',
        component: EdicionAlcoholComponent
    }

];
