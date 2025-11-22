import { Routes } from "@angular/router";

export default [
    {
        path: 'agregar',
        loadComponent: () => import("./agregar/agregar.component").then(c => c.AgregarComponent)
    },
    {
        path: 'listaalumnos',
        loadComponent: () => import("./alumnos/alumnos.component").then(c => c.AlumnosComponent)
    },
    {
        // C:id para recibir la matrícula
        path: 'editar/:id',
        loadComponent: () => import("./editar/editar.component").then(c => c.EditarComponent)
    },
    {

        path: 'eliminar/:id', 
        loadComponent: () => import("./eliminar/eliminar.component").then(c => c.EliminarComponent)
    }
] as Routes;