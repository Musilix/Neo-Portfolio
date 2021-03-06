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
      "img": "assets/projects/proj1.gif",
      "stack": [
        "Python",
        "Flask",
        "Angular"
      ],
      "links": [
        {
          "name": "git",
          "link": "https://github.com/Musilix/Mymyc"
        },
        {
          "name": "external",
          "link": "https://www.youtube.com"
        }
      ]
    },
    {
      "index": "2",
      "title": "BBTransit",
      "description": "BBTransit is a web based transport alert app that aims to simplify the daily life of a commuter by offering access to simple yet meaningful info such as bus arrival times, destinations, locations, and their adherence to the schedule; all in real time.",
      "img": "assets/projects/proj2.gif",
      "stack": [
        "PHP",
        "JavaScript",
        "HTML"
      ],
      "links": [
        {
          "name": "git",
          "link": "https://github.com/Musilix/BBTransit"
        }
      ]
    },
    {
      "index": "3",
      "title": "Queuetube",
      "description": "A Google Chrome extension which serves to improve users' experiences on YouTube by providing a means to queue up various videos they are interested, all at once! Circa: before Youtube added this functionality itself.",
      "img": "assets/projects/proj3.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "git",
          "link": "https://github.com/Musilix/QueueTube"
        }
      ]
    },
    {
      "index": "4",
      "title": "On the Cuff",
      "description": "A web app which aims to centralize crowd sourced info on food competitions, events with free food, and simply everything food. ",
      "img": "assets/projects/proj4.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "git",
          "link": "https://github.com/Musilix/On-The-Cuff"
        },
        {
          "name": "external",
          "link": "https://www.youtube.com"
        }
      ]
    },
    {
      "index": "5",
      "title": "Pipplio",
      "description": "A straightforward networking app for people who want to get into the startup scene, but don't have anyone to join them, yet.",
      "img": "assets/projects/pipplio_mini.svg",
      "stack": [
        "React",
        "Express",
        "Mongo",
        "Node"
      ],
      "links": [
        {
          "name": "git",
          "link": "https://github.com/Musilix/Pipplio"
        }
      ]
    }
  ];

  constructor() { }

  displayProj(projName){
    // console.log(this.htmlRef);
    // trying out a hacky way to allow scrolling on a page,
    // but also hide overflow on the click of a project... and it magically worked... cool
    window.scrollTo({
      top: 0,
      left:0,
      behavior: 'smooth'
    });
    this.htmlRef.style.overflow = "hidden";

    let projTemplate = document.getElementById(this.projTemplateMappings[projName]);

    if(projTemplate){
      projTemplate.style.bottom = "0%";
      this.currProj = projTemplate;
    }
  }

  closeCurrentProj(){
    if(this.currProj){
      this.currProj.style.bottom = "100%";
      setTimeout(()=> {this.htmlRef.style.overflow = "auto";}, 500);
      // this.currProj = null;
    }
  }

  getProjs(){
    return this.projects;
  }
}
