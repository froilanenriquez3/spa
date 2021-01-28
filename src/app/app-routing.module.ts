import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'single-card/:id', component: SingleCardComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
