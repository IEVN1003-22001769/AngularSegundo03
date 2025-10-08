import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html'
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0; 

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(0),
      y1: new FormControl(0),
      x2: new FormControl(0),
      y2: new FormControl(0),
    });
  }

  calcular(): void {
    const { x1, y1, x2, y2 } = this.formulario.value;

    const dx = x2 - x1;
    const dy = y2 - y1;

    this.resultado = Math.sqrt(dx * dx + dy * dy);
  }
}
