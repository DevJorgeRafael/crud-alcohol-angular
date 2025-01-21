import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmpleadoService } from '../../../services/empleados.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './consulta.component.html',
})
export class ConsultaComponent implements OnInit {
  empleados: any = [];
  constructor(
    public restApi: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.empleados = data;
    })
  }

  // Borrar un empleado
  deleteEmpleado(id: any) {
    if (window.confirm('Está seguro que desea eliminar el dato?')) {
      this.restApi.deleteEmpleado(id).subscribe(data => {
        this.getEmpleados()
      })
    }
  }
}
