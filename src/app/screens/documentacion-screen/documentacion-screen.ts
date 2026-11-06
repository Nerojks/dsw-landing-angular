import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen {
  urlDocumentacion = 'https://angular.dev';

  diapositivas = [
    { titulo: 'Darryl Dixon', imagen: 'assets/img/node.png' },
    { titulo: 'Carol Peletier', imagen: 'assets/img/typescript.png' },
    { titulo: 'Carl Grimes', imagen: 'assets/img/angular.png' },
    { titulo: 'Maggie Greene', imagen: 'assets/img/npm.png' }
  ];
}
