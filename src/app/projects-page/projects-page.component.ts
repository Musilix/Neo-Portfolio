import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  displayProj(projName){
    this.projectsService.displayProj(projName);
  }

  getProjs(){
    return this.projectsService.getProjs();
  }
}
