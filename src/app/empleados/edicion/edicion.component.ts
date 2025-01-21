import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edicion.component.html',
})
export class EdicionComponent implements OnInit {
  id: any;
  empleadoForm: FormGroup;

  constructor(
    public restApi: EmpleadoService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.params['id'];

    this.empleadoForm = this.formBuilder.group({
      nombre: [''],
      correo: [''],
      telefono: ['']
    })
  }

  ngOnInit(): void {
    this.restApi.getEmpleado(this.id).subscribe((data: any) => {
      this.empleadoForm.setValue({
        nombre: data.nombre,
        correo: data.correo,
        telefono: data.telefono
      })
    })
  }

  updateEmpleado() {
    if (window.confirm('Está seguro que desea actualizar?')) {
      this.restApi.updateEmpleado(this.id, this.empleadoForm.value).subscribe(data => {
        this.router.navigate(['/consulta'])
      })
    }
  }
}
