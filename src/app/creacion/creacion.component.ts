import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RestApiService } from '../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.css'
})
export class CreacionComponent implements OnInit {
  empleadoForm: FormGroup;

  constructor(
    public restApi: RestApiService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { 
    this.empleadoForm = this.formBuilder.group({
      nombre: [''],
      correo: [''],
      telefono: ['']
    })
  }
  ngOnInit(): void {
      
  }

  createEmpleado() {
    this.restApi.createEmpleado(this.empleadoForm.value).subscribe((data: {}) => {
      this.router.navigate(['/consulta'])
    })
  }
}
