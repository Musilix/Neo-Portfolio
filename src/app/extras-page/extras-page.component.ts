import { Component, OnInit } from '@angular/core';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-extras-page',
  templateUrl: './extras-page.component.html',
  styleUrls: ['./extras-page.component.css']
})
export class ExtrasPageComponent implements OnInit {
  private tabMappings = {0: "endeavours", 1: "art", 2: "hobbies"};
  public activeTabIdx = 0;
  // private activeTab = this.tabMappings[this.activeTabIdx];

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
  }

  // function for scrolling to specific section, depending on idx given + mapping value
  scrollTo(sectionIdx){
    this.activeTabIdx = sectionIdx;

    let scrollTo : HTMLElement = document.getElementById(this.tabMappings[this.activeTabIdx]);
    scrollTo.scrollIntoView({behavior: "smooth", block: "end"});
  }

  displayArt(idx){
    let artBio = document.getElementById("art-bio-" + idx);
    console.log(artBio);
  }

  getArt(){
    return this.artService.getArt();
  }

}
