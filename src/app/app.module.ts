import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import { CubeinfoService } from './cubeinfo/cubeinfo.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';

//to use ngModel
import { FormsModule } from '@angular/forms';
//include pipe
import { FilterPipe } from './filter.pipe';

import { SingleCardComponent } from './single-card/single-card.component';
import { HomeComponent } from './home/home.component';
import { FourbyfoursComponent } from './fourbyfours/fourbyfours.component';
import { SingleFourComponent } from './single-four/single-four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FilterPipe,
    SingleCardComponent,
    HomeComponent,
    FourbyfoursComponent,
    SingleFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CubeinfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
