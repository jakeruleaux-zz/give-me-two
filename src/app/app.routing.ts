import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { MedicalComponent } from './medical/medical.component';
import { EducationComponent } from './education/education.component';
import { CharityComponent } from './charity/charity.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'charity',
    component: Charity
  },
  {
    path: 'education',
    component: Education
  },
  {
    path: 'animals',
    component: Animals
  },
  {
    path: 'medical',
    component: Medical
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
