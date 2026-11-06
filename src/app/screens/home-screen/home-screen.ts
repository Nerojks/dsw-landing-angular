import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  imports: [],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss'
})
export class HomeScreen {
  tecnologias = [
    {
      nombre: 'Angular',
      icono: 'bi-braces',
      descripcion: 'Nuestro refugio: framework para construir aplicaciones web de una sola página.'
    },
    {
      nombre: 'TypeScript',
      icono: 'bi-filetype-tsx',
      descripcion: 'Las reglas del grupo: superconjunto tipado de JavaScript que utiliza Angular.'
    },
    {
      nombre: 'Node.js y NPM',
      icono: 'bi-box-seam',
      descripcion: 'Los suministros: entorno de ejecución y gestor de paquetes del proyecto.'
    }
  ];
}
