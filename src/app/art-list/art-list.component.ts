import { Component, OnInit } from '@angular/core';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
  }

  getArt(){
    return this.artService.getArt();
  }

}
