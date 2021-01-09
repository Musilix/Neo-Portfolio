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
  // TODO: move to art svc
  private currArt: HTMLElement = null;

  constructor() { }

  displayProj(idx){
    let artBioTemplate = document.getElementById("art-bio-" + idx);

    // if we find an existing art item with a name coinciding with the idx sent in,
    // then we should set its display on and tune the opacity so it fades in!
    if(artBioTemplate){
      artBioTemplate.style.display = "flex";
      setTimeout(() => {
        artBioTemplate.style.opacity = "1";
        this.currArt = artBioTemplate;
      }, 100);
    }
  }

  closeProj(){
    if(this.currArt){
      this.currArt.style.opacity = "0";
      setTimeout(() => {
        this.currArt.style.display = "none";
        this.currArt = null;
      }, 100);

      // setTimeout(()=> {this.htmlRef.style.overflow = "auto";}, 500);
      // this.currProj = null;
    }
  }

  getArt(){
    return this.artPieces;
  }
}
