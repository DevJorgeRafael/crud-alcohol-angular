import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmpleadoService } from '../../../services/empleados.service';
import { AlcoholService } from '../../../services/alcohol.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './alcoholes.component.html',
})
export class AlcoholesComponent implements OnInit {
  alcoholes: any = [];
  constructor(
    public restApi: AlcoholService
  ) { }

  ngOnInit(): void {
    this.getAlcoholes();
  }

  getAlcoholes() {
    return this.restApi.getAlcoholes().subscribe((data: {}) => {
      this.alcoholes = data;
    })
  }

  // Borrar un empleado
  deleteAlcohol(id: any) {
    if (window.confirm('Está seguro que desea eliminar el dato?')) {
      this.restApi.deleteAlcohol(id).subscribe(data => {
        this.getAlcoholes()
      })
    }
  }
}
