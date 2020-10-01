import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';

  constructor(private router : Router){
    console.log("IN CONSTRUCTOR");
    let path = localStorage.getItem('path');
    console.log(path);
    console.log(localStorage);
    if(path) {
      localStorage.removeItem('path');
      console.log([path]);
      this.router.navigate([path]);
    }
  }
}
