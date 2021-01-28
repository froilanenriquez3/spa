import { Component, OnInit } from '@angular/core';
import { CubeinfoService } from '../cubeinfo/cubeinfo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cubes:any[] = [];

  constructor(private _servicio:CubeinfoService) {
      this.cubes = _servicio.getCubes();
   }

  ngOnInit(): void {
  }

}
