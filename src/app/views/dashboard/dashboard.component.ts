import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  consultaRealizada = false;

  readonly filtrosForm = this.formBuilder.group({
    nome: [''],
    numero: [null as number | null]
  });

  constructor(private readonly formBuilder: FormBuilder) { }

  consultar(): void {
    this.consultaRealizada = true;
  }
}
