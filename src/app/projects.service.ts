import { Injectable } from '@angular/core';

interface Link{
  name: string;
  link: string;
}

interface Project{
  index: string;
  title: string;
  description: string;
  img: string;
  stack: string[];
  links: Link[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projTemplateMappings = {
    "1": "proj1-wrap",
    "2": "proj2-wrap",
    "3": "proj3-wrap",
    "4": "proj4-wrap",
    "5": "proj5-wrap"
  };

  private currProj: HTMLElement;
  private htmlRef = document.getElementsByTagName("html")[0];

  private projects: Project[] = [
    {
      "index": "1",
      "title": "Mymyc",
      "description": "Mymyc is a reusable test data management solution, providing a pleasing UX for those who need to generate synthetic test data for varying business scenarios.",
      "img": "assets/proj1.gif",
      "stack": [
        "Python",
        "Flask",
        "Angular",
        "Angular Material"
      ],
      "links": [
        {
          "name": "github",
          "link": "https://github.com/Musilix/Mymyc"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    },
    {
      "index": "2",
      "title": "BBTransit",
      "description": "BBTransit is a web based transport alert app that aims to simplify the daily life of a commuter by offering access to simple yet meaningful info such as bus arrival times, destinations, locations, and their adherence to the schedule; all in real time.",
      "img": "assets/proj2.gif",
      "stack": [
        "PHP",
        "JavaScript",
        "HTML"
      ],
      "links": [
        {
          "name": "github",
          "link": "https://github.com/Musilix/BBTransit"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    },
    {
      "index": "3",
      "title": "Queuetube",
      "description": "A Google Chrome extension which serves to improve users' experiences on YouTube by providing a means to queue up various videos they are interested, all at once! Circa: before Youtube added this functionality itself.",
      "img": "assets/proj3.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "github",
          "link": "https://github.com/Musilix/QueueTube"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    },
    {
      "index": "4",
      "title": "On the Cuff",
      "description": "A web app which aims to centralize crowd sourced info on food competitions, events with free food, and simply everything food. ",
      "img": "assets/proj4.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "github",
          "link": "https://github.com/Musilix/On-The-Cuff"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    },
    {
      "index": "5",
      "title": "Swappup",
      "description": "An app which provides a centralized place to barter with others around the world, while offering an easy means to sending and recieving items.",
      "img": "assets/proj5.gif",
      "stack": [
        "React",
        "Express",
        "Mongo",
        "Node"
      ],
      "links": [
        {
          "name": "github",
          "link": "https://github.com/Musilix/On-The-Cuff"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    }
  ];

  constructor() { }

  displayProj(projName){
    // trying out a hacky way to allow scrolling on a page,
    // but also hide overflow on the click of a project... and it magically worked... cool
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.htmlRef.style.overflow = "hidden";

    let projTemplate = document.getElementById(this.projTemplateMappings[projName]);
    this.currProj = projTemplate;

    if(projTemplate){
      projTemplate.style.bottom = "0%";
    }
  }

  closeCurrentProj(){
    if(this.currProj){
      this.htmlRef.style.overflow = "auto";
      this.currProj.style.bottom = "100%";
    }
  }

  getProjs(){
    return this.projects;
  }
}