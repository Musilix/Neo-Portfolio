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
      "img": "assets/art/golden_idol_front.webp",
      "medium": "Blender",
      "description": "Inspired by Spelunky, the game\nMade in Blender\n04/2020"
    },
    {
      "index": "1",
      "title": "Gleechi",
      "img": "assets/art/gleechi_bust.webp",
      "medium": "Blender",
      "description": "The bust of a round fellow who is somehow always angry.\nMade in Blender\n09/2020"
    },
    {
      "index": "2",
      "title": "Cheese Moon",
      "img": "assets/art/cheese_moon.webp",
      "medium": "Blender",
      "description": "Mic, The Cermamic Man, gazing at the cheese moon.\nMade in Blender\n04/2021"
    },
    {
      "index": "3",
      "title": "A Funny Frog",
      "img": "assets/art/funny_frog.webp",
      "medium": "Blender and Photoshop",
      "description": "Inspired by one of my favorite childhood books, I Spy\nMade in Blender, Post Processing in PS\n02/2021"
    },
    {
      "index": "4",
      "title": "Rhombeechi",
      "img": "assets/art/rhombeechi_bust.webp",
      "medium": "Blender",
      "description": "A more rhombus-like fellow who is just as angry as a Gleechi\nMade in Blender\n09/2020"
    },
    {
      "index": "5",
      "title": "Textures",
      "img": "assets/art/textures.webp",
      "medium": "Blender",
      "description": "A range of furry, smooth, and blocky textures\nMade in Blender\n03/2021"
    },
    {
      "index": "6",
      "title": "Bitmoji Me",
      "img": "assets/art/me.webp",
      "medium": "Blender",
      "description": "A 3D render of my bitmoji, since I couldn't export it from my phone.\nMade in Blender\n01/2021"
    },
    {
      "index": "7",
      "title": "Voided",
      "img": "assets/art/voided.webp",
      "medium": "Blender",
      "description": "A Gleechi chilling in the void. \nMade in Blender\n06/2020"
    },
    {
      "index": "8",
      "title": "Rico, the Giant",
      "img": "assets/art/rico.webp",
      "medium": "Blender",
      "description": "A piece I made for a funny Youtuber, @Rico The Giant \nMade in Blender\n06/2021"
    },
    {
      "index": "9",
      "title": "Unexpected Guest",
      "img": "assets/art/knockknock.webp",
      "medium": "Blender",
      "description": "A strange creature is knocking.\nIt locked itself out of it's car; will you let them in? \nMade in Blender\n07/2021"
    },
    {
      "index": "10",
      "title": "Siblings (by law!)",
      "img": "assets/art/siblings.webp",
      "medium": "Blender",
      "description": "Two little textured bros just chillin' on some dirt \nMade in Blender\n10/2021"
    },
    {
      "index": "11",
      "title": "Flowey",
      "img": "assets/art/flowey.webp",
      "medium": "Blender",
      "description": "A scary little creature from the garden. \nMade in Blender\n04/2021"
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
    }
  }

  getArt(){
    return this.artPieces;
  }
}
