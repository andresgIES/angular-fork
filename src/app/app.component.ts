import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ConsultarComicComponent } from "./components/consultar-comic/consultar-comic.component";
import { ConsultarPersonajeComponent } from "./components/consultar-personaje/consultar-personaje.component";
import { ConsultarSeriesComponent } from "./components/consultar-series/consultar-series.component";
import { DinamicComponentDirective } from "./directives/dinamic-component.directive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  @ViewChild("componenteDinamico", { static: true })
  componenteDinamico!: DinamicComponentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  private crearComponent(component: any): void {
    const componenteDinamico = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    this.viewContainerRef.clear();
    const referencia = this.viewContainerRef.createComponent(
      componenteDinamico
    );
    referencia.changeDetectorRef.detectChanges();
  }

  public createComponentPersonajes(): void {
    this.crearComponent(ConsultarPersonajeComponent);
  }

  public createComponentComics(): void {
    this.crearComponent(ConsultarComicComponent);
  }

  public createComponentSeries(): void {
    this.crearComponent(ConsultarSeriesComponent);
  }
}
