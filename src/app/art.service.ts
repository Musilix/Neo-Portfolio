import { Injectable } from '@angular/core';

interface Art{
  index: string;
  title: string;
  medium: string;
  img: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private artPieces : Art[] = [
    {
      "index": "0",
      "title": "The Golden Idol",
      "img": "assets/proj5.gif",
      "medium": "Blender",
      "description": "Inspired by Spelunky, the game\nMade in Blender\n09/2020"
    },
    {
      "index": "1",
      "title": "Gleechi",
      "img": "assets/proj4.gif",
      "medium": "Blender",
      "description": "An enemy that makes an appearance in my game, Down the Crevice\nMade in Blender\n09/2020"
    },
    {
      "index": "2",
      "title": "Crevice",
      "img": "assets/proj3.gif",
      "medium": "Blender",
      "description": "The main character, Crevice, of a game I'm making\nMade in Blender\n04/2020"
    },
    {
      "index": "3",
      "title": "Sentient Pancakes",
      "img": "assets/proj2.gif",
      "medium": "Blender",
      "description": "Inspired by Spelunky, the game\nMade in Blender\n09/2020"
    }

  ];

  constructor() { }

  displayProj(idx){
    let artName = "art" + idx;
    let artTemplate = document.getElementById(artName);
  
    // if we find an existing art item with a name coinciding with the idx sent in,
    // then we should set its display on and tune the opacity so it fades in!
    if(artTemplate){
      artTemplate.style.display = "block";
      artTemplate.style.opacity = "1";
    }
  }

  getArt(){
    return this.artPieces;
  }
}
