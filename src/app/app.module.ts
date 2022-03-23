import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PresentationComponent } from './componentes/presentation/presentation.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EstudiesComponent } from './componentes/estudies/estudies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ProjectsComponent,
    ExperienceComponent,
    SidebarComponent,
    ContactComponent,
    FooterComponent,
    EstudiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
