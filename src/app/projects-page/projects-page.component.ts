import { Component, OnInit } from '@angular/core';

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
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  private projTemplateMappings = {
    "proj1": "proj1-wrap",
    "proj2": "proj2-wrap",
    "proj3": "proj3-wrap",
  };

  private currProj: HTMLElement;
  private projects: Project[] = [
    {
      "index": "1",
      "title": "Project Xpulser",
      "description": "This project was when I was in a dark place. I accidentally ended up making a homonculus named George. They have transcended now",
      "img": "../../assets/proj1.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "github",
          "link": "www.github.com"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    },
    {
      "index": "2",
      "title": "Project Xpulser 2",
      "description": "This project was when I was in a dark place. I accidentally ended up making a homonculus named George. They have transcended now",
      "img": "../../assets/proj2.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "github",
          "link": "www.github.com"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    },
    {
      "index": "3",
      "title": "Project Xpulser",
      "description": "This project was when I was in a dark place. I accidentally ended up making a homonculus named George. They have transcended now",
      "img": "../../assets/proj3.gif",
      "stack": [
        "Angular",
        "Express",
        "Node"
      ],
      "links": [
        {
          "name": "github",
          "link": "www.github.com"
        },
        {
          "name": "external",
          "link": "www.youtube.com"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayProj(projName){
    let projTemplate = document.getElementById(this.projTemplateMappings[projName]);
    this.currProj = projTemplate;

    if(projTemplate){
      projTemplate.style.top = "0%";
    }
  }

  closeCurrentProj(){
    if(this.currProj){
      this.currProj.style.top = "100%";
    }
  }

}
