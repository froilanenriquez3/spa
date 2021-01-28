import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { HomeComponent } from './home/home.component';
import { FourbyfoursComponent } from './fourbyfours/fourbyfours.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'single-card/:id', component: SingleCardComponent},
  { path: '', component: HomeComponent },
  { path: 'fours', component: FourbyfoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
