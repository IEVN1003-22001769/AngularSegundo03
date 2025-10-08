import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DistanciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
