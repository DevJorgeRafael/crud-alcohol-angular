import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../../services/empleados.service';
import { Router } from '@angular/router';
import { AlcoholService } from '../../../services/alcohol.service';

@Component({
  selector: 'app-creacion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creacion.component.html',
})
export class CreacionAlcoholComponent implements OnInit {
  alcoholForm: FormGroup;

  constructor(
    public restApi: AlcoholService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.alcoholForm = this.formBuilder.group({
      nombre: [''],
      precio: [''],
      cantidad: ['']
    })
  }
  ngOnInit(): void {

  }

  createAlcohol() {
    this.restApi.createAlcohol(this.alcoholForm.value).subscribe((data: {}) => {
      this.router.navigate(['/alcoholes'])
    })
  }
}
