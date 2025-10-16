import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Operaseon } from './operaseon';

@Component({
  selector: 'app-axb',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './axb.component.html'
})
export class AxbComponent {
 
  resultado: number = 0;
  op: Operaseon = new Operaseon();
  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl('', [Validators.required]),
      b: new FormControl('', [Validators.required])
    });
  }

  calcular(): void {
    if (this.formulario.invalid) return;

    this.op.chido(
      Number(this.formulario.get('a')!.value),
      Number(this.formulario.get('b')!.value)
    );

    this.resultado = this.op.multiplicar();

  }


  }




