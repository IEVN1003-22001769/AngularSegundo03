import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnosUtl } from './alumnos'; // Ajusta esta ruta según donde tengas la interfaz
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectoapiService {
  // URL base sin la barra final para evitar dobles barras
  private apiUrl = 'http://127.0.0.1:5000/alumnos';

  constructor(private http: HttpClient) {}

  // Obtener todos (GET)
  public getAlumnos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Insertar (POST)
  public agregarNuevoAlumno(datos: AlumnosUtl): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }

  // Obtener uno (GET)
  public getAlumno(mat: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${mat}`);
  }

  // Modificar (PUT)
  public modificarAlumno(mat: number, datos: AlumnosUtl): Observable<any> {
    return this.http.put(`${this.apiUrl}/${mat}`, datos);
  }

  // Eliminar (DELETE)
  public EliminarAlumnos(mat: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${mat}`);
  }
}