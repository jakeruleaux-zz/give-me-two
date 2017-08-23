import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { MedicalComponent } from './medical/medical.component';
import { EducationComponent } from './education/education.component';
import { CharityComponent } from './charity/charity.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'charity',
    component: CharityComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path: 'medical',
    component: MedicalComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
