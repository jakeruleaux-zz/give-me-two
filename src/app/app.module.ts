import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { MedicalComponent } from './medical/medical.component';
import { EducationComponent } from './education/education.component';
import { CharityComponent } from './charity/charity.component';
import { ContactComponent } from './contact/contact.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CharityDetailComponent } from './charity-detail/charity-detail.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { MedicalDetailComponent } from './medical-detail/medical-detail.component';
import { LarryDetailComponent } from './larry-detail/larry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnimalsComponent,
    MedicalComponent,
    EducationComponent,
    CharityComponent,
    ContactComponent,
    AnimalDetailComponent,
    CharityDetailComponent,
    EducationDetailComponent,
    MedicalDetailComponent,
    LarryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
