import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { ConsultaComponent } from './components/empleados/consulta/consulta.component'; 
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Empleados App';
}
