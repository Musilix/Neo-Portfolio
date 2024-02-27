import { Injectable } from "@angular/core";
interface Endeavour {
  index: string;
  mediaType?: string;
  image: string;
  title: string;
  prevDesc: string;
  readMore: string;
}

@Injectable({
  providedIn: "root",
})
export class EndeavourService {
  private endeavoursList: Endeavour[] = [
    {
      index: "0",
      mediaType: "image/png",
      image: "assets/projects/purr-rot.png",
      title: "Purrcast",
      prevDesc:
        "I'm currently developing an app that uses pictures of cats to predict the daily weather.",
      readMore:
        "Purrcast is an app inspired by a childhood folk tale which says  that when a cat is sleeping upside down or on its head, the likelihood of it raining rises. The goal of Purrcast is to utilize photos of cats posted by people  and build out a prediction for shared regions.\n\nThe process flow goes as follows:  a user posts a photo of their cat (they must take the photo, they cannot upload a pre-shot image), we make sure that the user is actually posting a photo of a cat, we check if the cat is sleeping on it's head or not, we store the image of the cat after verification with the isOnHead flag either true or false, and then for each distinct region that a photo (or multiple photos) have been posted in, we build out a prediction of whether it's going to rain or not based on all the cat images we have in that region.\n\nThe prediction is simple caveman ratio where we check the isOnHead flag for entries in a given region and divide it by total posts in the region.",
    },
    {
      index: "1",
      mediaType: "image/gif",
      image: "assets/endeavours/mic_run.gif",
      title: "The Ceramic Man",
      prevDesc:
        "I'm currently spending some of my free time developing a game! It's called The Ceramic Man and incorporates features from all types of games I love.",
      readMore:
        "I'm very into rogue-like, physics based, procedurally generated games, so I sought to make my own game that encompassed all those things!\n\nI've been working on my game for a few months and you may even find some assets I've created for it around my site! I have no ETA in mind, but hope to one day release it for free for everyone to play!\n\n The game follows a hermit, Mic, who happens to be completely ceramic. He is a brittle man compared to the gritty and hardened world around him, but one day, he's pushed to his breaking point. Follow Mic on his journey to use whatever the environment gives him to wreak havoc on those who've wronged him!",
    },

    //   index: "0",
    //   mediaType: "image/gif",
    //   image: "assets/endeavours/pipplio.webp",
    //   title: "Pipplio",
    //   prevDesc:
    //     "I'm currently developing a straightforward networking app for people who want to get into the startup scene, but don't have anyone to join them, yet.",
    //   readMore:
    //     "Over the years, the idea of building a startup or SaaS app has intrigued me greatly. The only problem is, everyone tells you that your only chance for true success is if you have someone working alongside you. \n\n Sadly, I don't have many techy, business-y, marketing type friends. I don't have many friends to begin with! And I know I am not alone in this situation; so I want to provide a simple means to finding people around you with similar aspirations in a similar situation, to hopefully kickstart you startup.",
    // },
    // {
    //   index: "0",
    //   mediaType: "image/gif",
    //   image: "assets/endeavours/mic_run.gif",
    //   title: "The Ceramic Man",
    //   prevDesc:
    //     "I'm currently spending some of my free time developing a game! It's called The Ceramic Man and incorporates features from all types of games I love.",
    //   readMore:
    //     "I'm very into rogue-like, physics based, procedurally generated games, so I sought to make my own game that encompassed all those things!\n\nI've been working on my game for a few months and you may even find some assets I've created for it around my site! I have no ETA in mind, but hope to one day release it for free for everyone to play!\n The game follows a hermit, Mic, who happens to be completely ceramic. He is a brittle man compared to the gritty and hardened world around him, but one day, he's pushed to his breaking point. Follow Mic on his journey to use whatever the environment gives him to wreak havoc on those who've wronged him!",
    // },
  ];

  constructor() {}

  //verify if there is anything to the right of the curr endeavour object
  checkRightSide(index) {
    let idx = parseInt(index);

    if (this.endeavoursList.length - 1 > 0) {
      if (++idx <= this.endeavoursList.length - 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  checkLeftSide(index) {
    let idx = parseInt(index);

    if (this.endeavoursList.length - 1 > 0) {
      if (--idx >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  getEndeavours() {
    return this.endeavoursList;
  }
}
