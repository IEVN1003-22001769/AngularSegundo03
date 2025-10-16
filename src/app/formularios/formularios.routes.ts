import { Routes } from "@angular/router";

export default[
    {
        path:'axb',
        loadComponent:()=>import("./axb/axb.component").then(c=>c.AxbComponent)
    },
    {
        path:'distancia',
        loadComponent:()=>import("./distancia/distancia.component").then(c=>c.DistanciaComponent)
    },
    {
        path:'zodiaco',
        loadComponent:()=>import("./zodiaco/zodiaco-c").then(c=>c.ZodiacoC)
    }


]as Routes