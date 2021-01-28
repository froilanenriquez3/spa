import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CubeinfoService } from '../cubeinfo/cubeinfo.service';

@Component({
  selector: 'app-single-four',
  templateUrl: './single-four.component.html',
  styleUrls: ['./single-four.component.css']
})
export class SingleFourComponent implements OnInit {

  singleFour: any;
  constructor(
    private ruta:ActivatedRoute,
    private _servicio:CubeinfoService
  ) {
    this.ruta.params.subscribe(params=>{
      this.singleFour= this._servicio.getFour(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
