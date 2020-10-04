import { Component, Input, OnInit } from '@angular/core';
// import { Context } from 'vm';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() context: String;
  private navOptions : String[] = ["about", "projects", "contact", "extras"];
  public navOptionsContext : String[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navOptionsContext = this.navOptions.filter(ele => ele !== this.context);
  }

}
