import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-consultar-series',
  templateUrl: './consultar-series.component.html'
})
export class ConsultarSeriesComponent {

  constructor(private marvelService: MarvelService) { }

  serie = '';
  series: any[] = [];

  public buscar() {
    this.marvelService.getSeries(this.serie).subscribe(
      (data) => {
        this.series = [];
        this.series = data?.data?.results;
      }
    );
  }
}
