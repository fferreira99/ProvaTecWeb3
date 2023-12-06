import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaCatsComponent } from './lista-cats-component/lista-cats-component.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ListaCatsComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {

}
