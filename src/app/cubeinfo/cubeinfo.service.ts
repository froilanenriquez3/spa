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

  fourbyfours: Cube[] = [
    {
      name:"MOYU AOSU 4X4 GTS2 M",
      price: 44.99,
      size: 61,
      image: "../assets/images/auso.jpg"

    },
    {
      name: "YUXIN LITTLE MAGIC 4X4 M",
      price: 12.99,
      size: 60,
      image: "../assets/images/yuxin.jpg"
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

  getFours(){
    return this.fourbyfours;
  }

  getFour(){
    return this.fourbyfours;
  }
}

export interface Cube{
  name: string;
  price: number;
  size: number;
  image: string;
}
