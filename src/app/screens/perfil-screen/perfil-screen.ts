import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Rick Grimes',
    email: 'rick.grimes@alexandria.com',
    telefono: '222 123 4567',
    direccion: 'Calle Principal 100, Alexandria, Virginia',
    nacimiento: '01/01/1975'
  };
}
