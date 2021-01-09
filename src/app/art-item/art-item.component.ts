import { Component, OnInit, Input } from '@angular/core';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {
  @Input() artObj;

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    // console.log(this.artObj);
  }

  closeProj(){
    this.artService.closeProj();
  }

}
