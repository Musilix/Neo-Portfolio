import { Component, OnInit } from '@angular/core';
import { EndeavourService } from '../endeavour.service';

@Component({
  selector: 'app-endeavours-list',
  templateUrl: './endeavours-list.component.html',
  styleUrls: ['./endeavours-list.component.css']
})


export class EndeavoursListComponent implements OnInit {
  public currIdx = 0;

  constructor(private endeavourService: EndeavourService) { }

  ngOnInit(): void {

  }

  handleNavClick(i){
    // console.log(event);
    this.currIdx = i;
  }

  getEndeavours(){
    return this.endeavourService.getEndeavours();
  }
}
