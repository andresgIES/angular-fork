import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ConsultarComicComponent } from "./components/consultar-comic/consultar-comic.component";
import { ConsultarPersonajeComponent } from "./components/consultar-personaje/consultar-personaje.component";
import { ConsultarSeriesComponent } from "./components/consultar-series/consultar-series.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ConsultarComicComponent,
    ConsultarPersonajeComponent,
    ConsultarSeriesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
