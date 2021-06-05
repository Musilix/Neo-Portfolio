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
      "img": "assets/art/golden_idol_front.png",
      "medium": "Blender",
      "description": "Inspired by Spelunky, the game\nMade in Blender\n04/2020"
    },
    {
      "index": "1",
      "title": "Gleechi",
      "img": "assets/art/gleechi_bust.jpg",
      "medium": "Blender",
      "description": "The bust of a round fellow who is somehow always angry.\nMade in Blender\n09/2020"
    },
    {
      "index": "2",
      "title": "Cheese Moon",
      "img": "assets/art/cheese_moon.jpg",
      "medium": "Blender",
      "description": "Mic, The Cermamic Man, gazing at the cheese moon.\nMade in Blender\n04/2021"
    },
    {
      "index": "3",
      "title": "A Funny Frog",
      "img": "assets/art/funny_frog.jpg",
      "medium": "Blender and Photoshop",
      "description": "Inspired by one of my favorite childhood books, I Spy\nMade in Blender, Post Processing in PS\n02/2021"
    },
    {
      "index": "4",
      "title": "Rhombeechi",
      "img": "assets/art/rhombeechi_bust.jpg",
      "medium": "Blender",
      "description": "An more rhombus-like fellow who is just as angry as a Gleechi\nMade in Blender\n09/2020"
    },
    {
      "index": "5",
      "title": "Textures",
      "img": "assets/art/textures.jpg",
      "medium": "Blender",
      "description": "A range of furry, smooth, and blocky textures\nMade in Blender\n03/2021"
    },
    {
      "index": "6",
      "title": "Bitmoji Me",
      "img": "assets/art/me.jpg",
      "medium": "Blender",
      "description": "A 3D render of my bitmoji, since I couldn't export it from my phone.\nMade in Blender\n01/2021"
    },

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
