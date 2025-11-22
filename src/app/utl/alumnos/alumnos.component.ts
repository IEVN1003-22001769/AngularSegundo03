import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnoFilterPipe } from '../alumnosfilter.pipe';
import { AlumnosUtl } from '../alumnos'; 

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [AlumnoFilterPipe, RouterModule, FormsModule, CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'] // Vinculamos el CSS
})
export class AlumnosComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';
  alumnoTitle: string = 'Lista de Alumnos UTL';
  
  dataSource: any = {
    alumnos: [],
    mensaje: '',
    exito: false
  };

  constructor(public alumnosUtl: ProyectoapiService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  // Método para cargar la lista
  obtenerAlumnos(): void {
    this.alumnosUtl.getAlumnos().subscribe({
      next: (response) => {
        this.dataSource = response;
      },
      error: (error) => {
        console.error('Error al conectar con la API:', error);
      }
    });
  }


  eliminarAlumno(matricula: number): void {
    const confirmar = confirm('¿Estás seguro de que deseas eliminar al alumno con matrícula ' + matricula + '?');
    
    if (confirmar) {
      this.alumnosUtl.EliminarAlumnos(matricula).subscribe({
        next: () => {
          this.obtenerAlumnos();
          alert('Alumno eliminado correctamente');
        },
        error: (e) => {
          console.error(e);
          alert('Error al eliminar el alumno');
        }
      });
    }
  }
}