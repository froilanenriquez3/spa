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
      image: "../assets/images/mystic.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."
    },
    {
      name: 'ANGSTROM DAYAN GUHONG V4 ',
      price: 24.99,
      size: 56,
      image: "../assets/images/angstrom.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'CUBICLE CUSTOM GAN 11',
      price: 68.99,
      size: 56,
      image: "../assets/images/gan.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'YUXIN LITTLE MAGIC 3X3',
      price: 4.99,
      size: 55.5,
      image: "../assets/images/yuxin3.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'MYSTIC DAYAN GUHONG V3 M',
      price: 24.99,
      size: 56,
      image: "../assets/images/angstrom.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."
    },
    {
      name: 'ANGSTROM DAYAN GUHONG V3 ',
      price: 24.99,
      size: 56,
      image: "../assets/images/gan.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'CUBICLE CUSTOM GAN 10',
      price: 68.99,
      size: 56,
      image: "../assets/images/mystic.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'YUXIN BIG MAGIC 3X3',
      price: 4.99,
      size: 55.5,
      image: "../assets/images/angstrom.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'AVERAGE DAYAN GUHONG V3 M',
      price: 24.99,
      size: 56,
      image: "../assets/images/yuxin3.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."
    },
    {
      name: 'ANGSTROM DAYAN GUHONG V17 ',
      price: 24.99,
      size: 56,
      image: "../assets/images/gan.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'CUBICLE CUSTOM GAN 9',
      price: 68.99,
      size: 56,
      image: "../assets/images/mystic.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: 'YUXIN SUPER DUPER BIG MAGIC 3X3',
      price: 4.99,
      size: 55.5,
      image: "../assets/images/gan.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    }
  ]

  fourbyfours: Cube[] = [
    {
      name:"MOYU AOSU 4X4 GTS2 M",
      price: 44.99,
      size: 61,
      image: "../assets/images/auso.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."


    },
    {
      name: "YUXIN LITTLE MAGIC 4X4 M",
      price: 6.99,
      size: 59,
      image: "../assets/images/mf.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: "MFJS MEILONG 4X4",
      price: 12.99,
      size: 60,
      image: "../assets/images/yuxin.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: "MOYU AOSU 4X4 WR M",
      price: 42.99,
      size: 59,
      image: "../assets/images/moyuwr.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name:"MOYU AOSU 4X4 GTS1 M",
      price: 44.99,
      size: 61,
      image: "../assets/images/yuxin.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."


    },
    {
      name: "YUXIN BIG MAGIC 4X4 M",
      price: 6.99,
      size: 59,
      image: "../assets/images/mf.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: "MFJS MEILONG V2 4X4",
      price: 12.99,
      size: 60,
      image: "../assets/images/moyuwr.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: "MOYU AOSU 4X4 WRA M",
      price: 42.99,
      size: 59,
      image: "../assets/images/mf.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name:"MOYU AOSU 4X4 GTS3 M",
      price: 44.99,
      size: 61,
      image: "../assets/images/mf.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."


    },
    {
      name: "YUXIN MEDIUM MAGIC 4X4 M",
      price: 6.99,
      size: 59,
      image: "../assets/images/auso.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: "MFJS MEILONG V4 4X4",
      price: 12.99,
      size: 60,
      image: "../assets/images/moyuwr.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

    },
    {
      name: "MOYU AOSU 4X4 WRB M",
      price: 42.99,
      size: 59,
      image: "../assets/images/yuxin.jpg",
      desc: "The Mystic Dayan GuHong v4 M 3x3 is one of our premium versions of DaYan’s fourth iteration of its successful magnetic 3x3’s in the GuHong series. It is set up with Traxxas-10k on the core, and Traxxas-10k, Mystic, and DNM-37 on the pieces creating a soft and fast turning experience. This product is lubed with Cubicle Labs Mystic, which contains aloe. Please refrain from purchasing this product if you have an aloe allergy. Cubicle Premium Cube Guarantee: The workmanship on  premium cubes is covered by our 6-month warranty. For more details of the warranty and what's covered, please refer to our Premium Warranty page. Original puzzle made by DaYan. It features a Mystic logo on the green side."

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

  getFour(id: string){
    return this.fourbyfours[id];
  }
}

export interface Cube{
  name: string;
  price: number;
  size: number;
  image: string;
  desc: string;
}
