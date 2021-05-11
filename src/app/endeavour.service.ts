import { Injectable } from '@angular/core';

interface Endeavour {
  index: string;
  image: string;
  title: string;
  prevDesc: string;
  readMore: string;
}

@Injectable({
  providedIn: 'root'
})

export class EndeavourService {
  private endeavoursList: Endeavour[] = [
    {
      "index": "0",
      "image": "assets/endeavours/mic.jpg",
      "title": "The Ceramic Man",
      "prevDesc": "I'm currently spending some of my free time developing a game! It's called The Ceramic Man and incorporates features from all types of games I love.",
      "readMore": "I'm very into rogue-like, physics based, procedurally generated games, so I sought to make my own game that encompassed all those things!\n\nI've been working on my game for a few months and you may even find some assets I've created for it around my site! I have no ETA in mind, but hope to one day release it for free for everyone to play!\n The game follows a hermit, Mic, who happens to be completely ceramic. He is a brittle man compared to the gritty and hardened world around him, but one day, he's pushed to his breaking point. Follow Mic on his journey to use whatever the environment gives him to wreak havoc on those who've wronged him!"
    }
    ,
    {
      "index": "1",
      "image": "assets/proj3.gif",
      "title": "Swappup",
      "prevDesc": "I'm currently developing a centralized and well-rounded place for all your bartering/free-trade needs, while also giving a good sense of security!",
      "readMore": "Over the years, the idea of bartering and free trading has always interested me. It wasn't until recently when a friend and I were discussing it that I got a bit more serious with the idea.\nAlthough there are a variety of similar apps as well as apps that provide a somewhat pseudo-bartering marketplace, I'd like to provide a means that focuses solely on free trade and bartering, all while doing so in a secure means, with things such as contactless trade."
    }
  ];

  constructor() { }

  //verify if there is anything to the right of the curr endeavour object
  checkRightSide(index){
    let idx = parseInt(index);

    if(this.endeavoursList.length - 1 > 0){
      if(++idx <= this.endeavoursList.length - 1){
        return true;
      }else{
        return false;
      }
    }
  }

  checkLeftSide(index){
    let idx = parseInt(index);

    if(this.endeavoursList.length - 1 > 0){
      if(--idx >= 0){
        return true;
      }else{
        return false;
      }
    }
  }

  getEndeavours(){
    return this.endeavoursList;
  }
}
