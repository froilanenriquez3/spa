import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CubeinfoService } from '../cubeinfo/cubeinfo.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  singleCard: any;
  constructor(
    private ruta:ActivatedRoute,
    private _servicio:CubeinfoService
  ) {
    this.ruta.params.subscribe(params=>{
      this.singleCard= this._servicio.getCube(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
