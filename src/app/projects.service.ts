import { Injectable } from "@angular/core";

interface Link {
  name: string;
  link: string;
}

interface Project {
  index: string;
  title: string;
  description: string;
  miniImg: string;
  miniImgBackUp?: string;
  bioImg: string;
  stack: string[];
  links: Link[];
}

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  private currProj: HTMLElement;
  private htmlRef = document.getElementsByTagName("html")[0];

  private projects: Project[] = [
    {
      index: "1",
      title: "Purrcast",
      description:
        "A fun little toy that I'm currently working on that'll use pictures of cats to predict the daily weather.",
      miniImg: "assets/projects/purr-rot.png",
      bioImg: "assets/projects/purr-bio.webp",
      stack: ["React", "Node", "Supabase", "Prisma", "Postgres"],
      links: [
        {
          name: "external",
          link: "https://www.purrcast.xyz",
        },
        {
          name: "git",
          link: "https://github.com/Musilix/Purrcast",
        },
      ],
    },
    {
      index: "2",
      title: "Queuetube",
      description:
        "A Google Chrome extension which serves to improve users' experiences on YouTube by providing a means to queue up various videos they are interested, all at once! Circa: before Youtube added this functionality itself.",
      miniImg: "assets/projects/qtube-rot.gif",
      bioImg: "assets/projects/qtube-bio.webp",
      stack: ["HTML/CSS", "JavaScript"],
      links: [
        {
          name: "git",
          link: "https://github.com/Musilix/QueueTube",
        },
      ],
    },
    {
      index: "3",
      title: "Mymyc",
      description:
        "Mymyc is a reusable test data management solution, providing a pleasing UX for those who need to generate synthetic test data for varying business scenarios.",
      miniImg: "assets/projects/mymyc-rot.gif",
      bioImg: "assets/projects/mymyc-bio.webp",
      stack: ["Python", "Flask", "Angular"],
      links: [
        {
          name: "git",
          link: "https://github.com/Musilix/Mymyc",
        },
      ],
    },
    {
      index: "4",
      title: "BBTransit",
      description:
        "BBTransit is a web based transport alert app that aims to simplify the daily life of a commuter by offering access to simple yet meaningful info such as bus arrival times, destinations, locations, and their adherence to the schedule; all in real time.",
      miniImg: "assets/projects/bbtransit-rot.gif",
      miniImgBackUp: "assets/projects/bbtransit-rot-vp9.webm",
      bioImg: "assets/projects/bbtransit-bio.webp",
      stack: ["PHP", "JavaScript", "HTML"],
      links: [
        {
          name: "git",
          link: "https://github.com/Musilix/BBTransit",
        },
      ],
    },
    {
      index: "5",
      title: "On the Cuff",
      description:
        "A web app which aims to centralize crowd sourced info on food competitions, events with free food, and simply everything food. ",
      miniImg: "assets/projects/onthecuff-rot.gif",
      bioImg: "assets/projects/onthecuff-bio.webp",
      stack: ["PHP", "JavaScript", "HTML/CSS"],
      links: [
        {
          name: "git",
          link: "https://github.com/Musilix/On-The-Cuff",
        },
      ],
    },
    // {
    //   "index": "5",
    //   "title": "Pipplio",
    //   "description": "A straightforward networking app for people who want to get into the startup scene, but don't have anyone to join them, yet.",
    //   "img": "assets/projects/pipplio_mini.svg",
    //   "stack": [
    //     "React",
    //     "Express",
    //     "Mongo",
    //     "Node"
    //   ],
    //   "links": [
    //     {
    //       "name": "git",
    //       "link": "https://github.com/Musilix/Pipplio"
    //     }
    //   ]
    // }
  ];

  constructor() {}

  displayProj(projName) {
    // trying out a hacky way to allow scrolling on a page,
    // but also hide overflow on the click of a project... and it magically worked... cool
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.htmlRef.style.overflow = "hidden";

    let projTemplate = document.getElementById(`proj${projName}-wrap`);

    if (projTemplate) {
      projTemplate.style.display = "block";
      setTimeout(() => (projTemplate.style.bottom = "0%"), 50);
      this.currProj = projTemplate;
    }
  }

  closeCurrentProj() {
    if (this.currProj) {
      this.currProj.style.bottom = "100%";
      setTimeout(() => {
        this.htmlRef.style.overflow = "auto";
        this.currProj.style.display = "none";
      }, 500);
      // this.currProj = null;
    }
  }

  getProjs() {
    return this.projects;
  }
}
