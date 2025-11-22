import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosUtl: ProyectoapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. Obtener el ID de la URL
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id'); // Asegúrate que en tu app.routes sea path: 'editar/:id'
      if (id) {
        this.cargarAlumno(parseInt(id));
      }
    });
  }

  // 2. Cargar datos en el formulario
  cargarAlumno(matricula: number) {
    this.alumnosUtl.getAlumno(matricula).subscribe({
      next: (response) => {
        // Ajusta esto según cómo responda tu API exactamente.
        // Si la API devuelve { exito: true, alumno: {...} }
        if (response && response.alumno) {
            this.regAlumno = response.alumno;
        } else {
            // Si la API devuelve el objeto directo
            this.regAlumno = response; 
        }
      },
      error: (e) => console.error('Error al cargar alumno:', e)
    });
  }

  // 3. Guardar cambios y redirigir
  modificar() {
    this.alumnosUtl.modificarAlumno(this.regAlumno.matricula, this.regAlumno).subscribe({
      next: () => {
        alert('Alumno modificado con éxito');
        this.router.navigate(['/utl/listaalumnos']); // Redirección a la lista
      },
      error: (e) => {
        console.error('Error al modificar:', e);
        alert('Error al guardar los cambios');
      }
    });
  }
}