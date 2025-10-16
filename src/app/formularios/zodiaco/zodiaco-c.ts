
import { FormGroup, FormControl } from '@angular/forms';

export class ZodiacoC {
  formulario!: FormGroup;
  nombreCompleto = '';
  sexo = 'Masculino';
  edad = 0;
  signo = '';
  imagen = '';
  baseA = 2008;
  signos = [
    { nombre: 'Rata', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg' },
    { nombre: 'Buey', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg' },
    { nombre: 'Tigre', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg' },
    { nombre: 'Conejo', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg' },
    { nombre: 'Dragón', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg' },
    { nombre: 'Serpiente', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg' },
    { nombre: 'Caballo', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg' },
    { nombre: 'Cabra', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg' },
    { nombre: 'Mono', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg' },
    { nombre: 'Gallo', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg' },
    { nombre: 'Perro', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg' },
    { nombre: 'Cerdo', foto: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg' }
  ];

  constructor() {
    this.initForm();
  }

  initForm(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('Masculino')
    });
  }

  calcular(): void {
    
  const { dia = 0, mes = 0, anio = 0, nombre = '', apaterno = '', amaterno = '', sexo = 'Masculino' } = this.formulario.value;
  const d = Number(dia) || 0;
  const m = Number(mes) || 0;
  const a = Number(anio) || 0;

  const hoy = new Date();
  let edadCalc = hoy.getFullYear() - a;
  if (m > 0 && d > 0 && (m > (hoy.getMonth() + 1) || (m === (hoy.getMonth() + 1) && d > hoy.getDate()))) {
    edadCalc--;
  }

  const index = ((a - this.baseA) % 12 + 12) % 12;
  const signoObj = this.signos[index] || this.signos[0];

  this.nombreCompleto = `${nombre} ${apaterno} ${amaterno}`.trim();
  this.sexo = sexo;
  this.edad = edadCalc;
  this.signo = signoObj.nombre;
  this.imagen = signoObj.foto;
  }
}