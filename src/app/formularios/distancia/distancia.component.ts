import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Distancia } from './distancias';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html'
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0; 
  dist: Distancia = new Distancia();
  detalle: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(0),
      y1: new FormControl(0),
      x2: new FormControl(0),
      y2: new FormControl(0),
    });
  }

  calcular(): void {
   
    this.dist.x1 = this.formulario.get('x1')!.value;
    this.dist.y1 = this.formulario.get('y1')!.value;
    this.dist.x2 = this.formulario.get('x2')!.value;
    this.dist.y2 = this.formulario.get('y2')!.value;
   
    this.resultado = this.dist.calcular();
  }
}
