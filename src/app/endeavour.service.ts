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
      "image": "../../assets/proj5.gif",
      "title": "Down the Crevice",
      "prevDesc": "I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love.",
      "readMore": "I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love. I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love. I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love."
    }
    ,
    {
      "index": "1",
      "image": "../../assets/proj3.gif",
      "title": "Swappup",
      "prevDesc": "Over the years, the idea of bartering and free trading has always interested me. I'm currently developing a centralized and well-rounded place for all your bartering/free-trade needs, while also giving a good sense of security!",
      "readMore": "..."
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
