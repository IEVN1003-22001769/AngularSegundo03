import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { AxbComponent } from './formularios/axb/axb.component';
import {initFlowbite} from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent, AxbComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';

  ngOnit(): void{
    initFlowbite();
  }

}
