import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-route-handler',
  templateUrl: './prod-route-handler.component.html',
  styleUrls: ['./prod-route-handler.component.css']
})
export class ProdRouteHandlerComponent implements OnInit {

  constructor(private router : Router) { 
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

  ngOnInit(): void {
  }

}
