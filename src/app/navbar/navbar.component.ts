import { Component, OnInit, ViewChild } from '@angular/core';
import { CubeinfoService } from '../cubeinfo/cubeinfo.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cubes: any[] = [];
  searchText: string;

  constructor(private _servicio:CubeinfoService) {
    this.cubes = _servicio.getCubes();
   }

  ngOnInit(): void {
  }

  clearSearch(){
    this.searchText = '';
  }

}
