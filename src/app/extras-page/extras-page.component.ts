import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras-page',
  templateUrl: './extras-page.component.html',
  styleUrls: ['./extras-page.component.css']
})
export class ExtrasPageComponent implements OnInit {
  private tabMappings = {0: "endeavours", 1: "art", 2: "hobbies"};
  public activeTabIdx = 0;
  // private activeTab = this.tabMappings[this.activeTabIdx];

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(sectionIdx){
    this.activeTabIdx = sectionIdx;

    let scrollTo : HTMLElement = document.getElementById(this.tabMappings[this.activeTabIdx]);
    scrollTo.scrollIntoView({behavior: "smooth", block: "end"});
  }

}
