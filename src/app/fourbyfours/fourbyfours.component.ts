import { Component, OnInit } from '@angular/core';
import { CubeinfoService } from '../cubeinfo/cubeinfo.service';

@Component({
  selector: 'app-fourbyfours',
  templateUrl: './fourbyfours.component.html',
  styleUrls: ['./fourbyfours.component.css']
})
export class FourbyfoursComponent implements OnInit {


  cubes:any[] = [];

  constructor(private _servicio:CubeinfoService) {
      this.cubes = _servicio.getFours();
   }


  ngOnInit(): void {
  }

}
