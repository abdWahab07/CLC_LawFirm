import { FirmComponent } from './firm/firm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyersComponent } from './lawyers/lawyers.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lawyers', component: LawyersComponent },
  { path: 'the-firm', component: FirmComponent },
  { path: 'practice-areas', component: PracticeAreasComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
