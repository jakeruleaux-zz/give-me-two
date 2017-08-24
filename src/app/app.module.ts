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
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AnimalAdminComponent } from './animal-admin/animal-admin.component';
import { EditAnimalsComponent } from './edit-animals/edit-animals.component';
import { CharityAdminComponent } from './charity-admin/charity-admin.component';
import { EditCharityComponent } from './edit-charity/edit-charity.component';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { EducationAdminComponent } from './education-admin/education-admin.component';
import { EditMedicalComponent } from './edit-medical/edit-medical.component';
import { MedicalAdminComponent } from './medical-admin/medical-admin.component';
import { DonationComponent } from './donation/donation.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


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
    AnimalAdminComponent,
    EditAnimalsComponent,
    CharityAdminComponent,
    EditCharityComponent,
    EditEducationComponent,
    EducationAdminComponent,
    EditMedicalComponent,
    MedicalAdminComponent,
    DonationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
