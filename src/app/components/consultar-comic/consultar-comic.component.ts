import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-consultar-comic',
  templateUrl: './consultar-comic.component.html'
})
export class ConsultarComicComponent {

  constructor(private marvelService: MarvelService) { }

  comic = '';
  comics: any[] = [];

  public buscar() {
    this.marvelService.getComics(this.comic).subscribe(
      (data) => {
        this.comics = [];
        this.comics = data?.data?.results;
      }
    );
  }


}
