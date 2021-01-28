import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CubeinfoService {

  cubes:Cube[] = [
    {
      name: 'MYSTIC DAYAN GUHONG V4 M',
      price: 24.99,
      size: 56,
      image: "../assets/images/mystic.jpg"
    },
    {
      name: 'ANGSTROM DAYAN GUHONG V4 ',
      price: 24.99,
      size: 56,
      image: "../assets/images/angstrom.jpg"
    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg"
    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg"
    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg"
    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg"
    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg"
    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg"
    }
  ]

  constructor() {
    console.log("Service functioning");
  }

  getCubes(){
    return this.cubes;
  }

  getCube(id: string){
    return this.cubes[id];
  }
}

export interface Cube{
  name: string;
  price: number;
  size: number;
  image: string;
}
