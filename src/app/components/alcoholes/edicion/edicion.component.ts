import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../../services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlcoholService } from '../../../services/alcohol.service';

@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edicion.component.html',
})
export class EdicionAlcoholComponent implements OnInit {
  id: any;
  alcoholForm: FormGroup;

  constructor(
    public restApi: AlcoholService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.params['id'];

    this.alcoholForm = this.formBuilder.group({
      nombre: [''],
      precio: [''],
      cantidad: ['']
    })
  }

  ngOnInit(): void {
    this.restApi.getAlcohol(this.id).subscribe((data: any) => {
      this.alcoholForm.setValue({
        nombre: data.nombre,
        precio: data.precio,
        cantidad: data.cantidad
      })
    })
  }

  updateAlcohol() {
    if (window.confirm('Está seguro que desea actualizar?')) {
      this.restApi.updateAlcohol(this.id, this.alcoholForm.value).subscribe(data => {
        this.router.navigate(['/alcoholes'])
      })
    }
  }
}
