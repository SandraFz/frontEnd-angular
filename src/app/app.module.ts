import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PresentationComponent } from './componentes/presentation/presentation.component';
import { ProjectsComponent } from './componentes/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
