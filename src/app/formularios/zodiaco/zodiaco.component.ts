
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZodiacoC } from './zodiaco-c';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html'
})
export class ZodiacoComponent implements OnInit {
  zodiaco = new ZodiacoC(); 

  ngOnInit(): void {
    this.zodiaco.initForm();
  }

  calcular(): void {
    this.zodiaco.calcular();
  }
}
