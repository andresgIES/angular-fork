import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-consultar-personaje',
  templateUrl: './consultar-personaje.component.html'
})
export class ConsultarPersonajeComponent {

  constructor(private marvelService: MarvelService) { }

  nombre = '';
  personajes: any[] = [];

  public buscar() {
    this.marvelService.getPersonaje(this.nombre).subscribe(
      (data) => {
        this.personajes = [];
        this.personajes = data?.data?.results;
      }
    );
  }

}
